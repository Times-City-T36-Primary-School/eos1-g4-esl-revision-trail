"""Make the listening recordings with ElevenLabs voices (version 3, 26 November 2026).

Same timing and finish as scripts/tts_build.py (0.5 s lead-in, 0.75 s between speakers, every line at the same
loudness, -16 LUFS, peaks under -1.5 dB, mono MP3 64 kbps), but each line is spoken by an ElevenLabs voice.
The script voice ids (bf_emma, bm_lewis ...) map to ElevenLabs voices in app/audio/voices-eleven.json.
A spelled name (W-E-B-B) is sent as separate letters ("W. E. B. B.") so it is read letter by letter.

The ElevenLabs key is never in this file: the session's network proxy adds it to requests to api.elevenlabs.io
(on another computer, set ELEVEN_API_KEY). Every line made is kept in ./tts_el_cache, so a line is paid for once.
A recording is remade only when its lines, the voice map or BUILD change (app/audio/cache-eleven.json).

  BUDGET=6000 python3 scripts/tts_eleven.py summit      only these manifests; stop before 6,000 new characters
  python3 scripts/tts_eleven.py --dry 4 5 summit        count the characters that would be sent, make nothing"""
import json, glob, os, re, hashlib, subprocess, sys, time, urllib.request, urllib.error
import numpy as np, soundfile as sf

BUILD = 'el1'
ROOT = './app'
OUT = os.environ.get('TTS_OUT', './dist/audio')
CACHE_DIR = os.environ.get('EL_CACHE', './tts_el_cache')
os.makedirs(OUT, exist_ok=True); os.makedirs(CACHE_DIR, exist_ok=True)
cache_p = ROOT + '/audio/cache-eleven.json'
cache = json.load(open(cache_p)) if os.path.exists(cache_p) else {}
CFG = json.load(open(ROOT + '/audio/voices-eleven.json'))
VMAP, MODEL, SETTINGS = CFG['voices'], CFG['model'], CFG['settings']
KEY = os.environ.get('ELEVEN_API_KEY', 'proxy-injected')
SR = 24000
SPELL = re.compile(r"\b([A-Za-z](?:-[A-Za-z]){2,})\b")
args = [a for a in sys.argv[1:] if not a.startswith('--')]
DRY = '--dry' in sys.argv
BUDGET = int(os.environ.get('BUDGET', '0') or 0)
sent = 0


def clean(t):
    t = re.sub(r'<[^>]+>', '', t).replace('*', '')
    t = SPELL.sub(lambda m: '. '.join(m.group(1).upper().split('-')) + '.', t)    # W-E-B-B -> W. E. B. B.
    return t.strip()


def gap(s): return np.zeros(int(SR * s), dtype=np.float32)


def tts(text, voice):
    """one line -> float32 samples at 24 kHz; cached by voice, model, settings and text"""
    global sent
    vid = VMAP.get(voice, VMAP['bf_emma'])
    h = hashlib.md5(json.dumps([vid, MODEL, SETTINGS, text], ensure_ascii=False).encode()).hexdigest()
    p = f'{CACHE_DIR}/{h}.pcm'
    if not os.path.exists(p):
        if DRY:
            sent += len(text); return gap(0.1)
        if BUDGET and sent + len(text) > BUDGET:
            raise SystemExit(f'budget reached: {sent} characters sent, next line needs {len(text)}')
        body = json.dumps({'text': text, 'model_id': MODEL, 'voice_settings': SETTINGS}).encode()
        for attempt in range(4):
            req = urllib.request.Request(f'https://api.elevenlabs.io/v1/text-to-speech/{vid}?output_format=pcm_24000', data=body,
                                         headers={'xi-api-key': KEY, 'Content-Type': 'application/json'})
            try:
                data = urllib.request.urlopen(req, timeout=120).read(); break
            except urllib.error.HTTPError as e:
                msg = e.read().decode(errors='replace')[:300]
                if e.code in (429, 500, 502, 503) and attempt < 3: time.sleep(5 * (attempt + 1)); continue
                raise SystemExit(f'ElevenLabs error {e.code}: {msg}')
            except (urllib.error.URLError, ConnectionError, TimeoutError, OSError) as e:    # a dropped connection: wait, try again
                if attempt < 3: time.sleep(5 * (attempt + 1)); continue
                raise SystemExit(f'network error: {e}')
        open(p, 'wb').write(data); sent += len(text)
    return np.frombuffer(open(p, 'rb').read(), dtype=np.int16).astype(np.float32) / 32768


def trim(a, th=0.004):
    idx = np.where(np.abs(a) > th)[0]
    return a[max(0, idx[0] - int(SR * 0.03)):idx[-1] + int(SR * 0.08)] if len(idx) else a


def level(a, target_db=-20.0):
    if not len(a): return a
    v = a[np.abs(a) > 0.01]
    if not len(v): return a
    g = 10 ** (target_db / 20) / max(np.sqrt(np.mean(v ** 2)), 1e-6)
    return a * min(g, 8.0)


def fade(a, ms=15):
    n = int(SR * ms / 1000)
    if len(a) > 2 * n:
        a[:n] *= np.linspace(0, 1, n); a[-n:] *= np.linspace(1, 0, n)
    return a


def build(aid, lines):
    chunks = [gap(0.5)]
    for i, ln in enumerate(lines):
        text = clean(ln[2] if len(ln) > 2 else ln[-1])
        chunks.append(level(trim(tts(text, ln[0]))) if text else gap(0.1))
        chunks.append(gap(0.75 if i < len(lines) - 1 else 0.6))
    if DRY: return 0
    wav = fade(np.concatenate(chunks))
    wav = wav / (np.max(np.abs(wav)) or 1) * 0.7
    tmp = f'/tmp/el-{aid}.wav'
    sf.write(tmp, wav, SR)
    m = subprocess.run(['ffmpeg', '-hide_banner', '-i', tmp, '-af', 'highpass=f=70,loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json', '-f', 'null', '-'],
                       capture_output=True, text=True).stderr
    j = json.loads(m[m.rfind('{'):m.rfind('}') + 1])
    ln = ('highpass=f=70,loudnorm=I=-16:TP=-1.5:LRA=11:linear=true:measured_I={input_i}:measured_TP={input_tp}:measured_LRA={input_lra}'
          ':measured_thresh={input_thresh}:offset={target_offset}').format(**j)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', tmp, '-af', ln + ',aresample=48000,alimiter=limit=0.75:attack=3:release=60:level=false,aresample=24000',
                    '-ac', '1', '-ar', str(SR), '-c:a', 'libmp3lame', '-b:a', '64k', f'{OUT}/{aid}.mp3'], check=True)
    os.remove(tmp)
    return len(wav) / SR


todo = {}
for f in sorted(glob.glob(ROOT + '/audio/manifest-*.json')):
    if args and not any(f.endswith(f'manifest-{x}.json') for x in args): continue
    todo.update(json.load(open(f, encoding='utf8')))
done = secs = 0
for aid, lines in todo.items():
    h = hashlib.md5((BUILD + json.dumps(CFG, sort_keys=True) + json.dumps(lines, ensure_ascii=False)).encode()).hexdigest()
    if cache.get(aid) == h and os.path.exists(f'{OUT}/{aid}.mp3') and not DRY: continue
    secs += build(aid, lines)
    if not DRY:
        cache[aid] = h; done += 1
        json.dump(cache, open(cache_p, 'w'))
        print('made', aid, flush=True)
print(f'{"would send" if DRY else "sent"} {sent} characters; {done} recordings made, {secs:.0f} s of audio; {len(todo)} in these manifests')
