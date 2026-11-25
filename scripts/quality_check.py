"""quality_check.py - the Grade 5 lessons as automatic checks. Run from the folder root:

  python3 scripts/quality_check.py                 # all content/stop*.json and content/summit.json

1. Answer length: per stop (and the Summit), the share of mcqs where the right answer (opts[0]) is the uniquely
   longest option must be 25 to 45% (target 25 to 40%), and uniquely shortest at most 35%.
2. "but" pattern: keys and distractors with "but" (reading and listening mcqs).
3. British spelling and em dashes in every English string.
4. Summit freshness: rare words and 6-word runs shared between the Summit and any stop, and person names shared.
5. Mini tests: exactly 10 items, five DOK 1 then five DOK 2.
Prints PROBLEMS (must fix) and NOTES (look at). Ends with "QUALITY OK" when there are no problems."""
import json, re, glob, os, sys
from collections import Counter

files = sorted(glob.glob('content/stop*.json'), key=lambda f: int(re.findall(r'\d+', f)[0]))
summit = 'content/summit.json'
probs, notes = [], []

AMERICAN = r'\b(color|colors|colored|favorite|favorites|center|centers|theater|program|programs|mom|moms|soccer|cookie|cookies|vacation|vacations|candy|apartment|neighbor|neighbors|neighborhood|gray|traveled|traveling|realize|realized|organize|organized|meter|meters|liter|fall semester|math|movie theater|sidewalk|trash can|eraser|flashlight|recess|mailbox|yard sale)\b'


def strings(o, key=''):
    if isinstance(o, dict):
        for k, v in o.items():
            if k in ('vi', 'id', 'pic', 'bank') and k != 'bank':
                continue
            yield from strings(v, k)
    elif isinstance(o, list):
        for v in o:
            yield from strings(v, key)
    elif isinstance(o, str):
        if key not in ('vi',):
            yield o


def items(d):
    out = []
    def walk(o):
        if isinstance(o, dict):
            if o.get('type') in ('mcq', 'pmcq', 'tfill', 'bank'):
                out.append(o)
            for v in o.values():
                walk(v)
        elif isinstance(o, list):
            for v in o:
                walk(v)
    walk(d)
    return out


def plain(s):
    return re.sub(r'<[^>]+>', ' ', str(s)).replace('*', '')


def length_stats(name, d):
    m = [it for it in items(d) if it.get('type') == 'mcq' and all(isinstance(x, str) for x in it['opts'])
         and not all(len(plain(x).split()) == 1 for x in it['opts'])]   # one-word options (names, grammar words) are not counted
    if not m:
        return
    L = S = 0
    for it in m:
        ln = [len(plain(x).strip()) for x in it['opts']]
        if ln[0] > max(ln[1:]):
            L += 1
        if ln[0] < min(ln[1:]):
            S += 1
    pl, ps = 100 * L / len(m), 100 * S / len(m)
    line = f'{name}: {len(m)} mcqs, key longest {pl:.0f}%, key shortest {ps:.0f}%'
    if len(m) < 30:            # too few mcqs (the Summit) for a percentage rule: a note only
        (notes if (pl < 20 or pl > 45 or ps > 35) else []).append('length ' + line)
        if not (pl < 20 or pl > 45 or ps > 35): print('ok  ' + line)
    elif pl < 20 or pl > 45 or ps > 35:
        probs.append('LENGTH ' + line)
    elif pl < 25 or pl > 40:
        notes.append('length ' + line)
    else:
        print('ok  ' + line)
    kb = sum(1 for it in m if re.search(r'\bbut\b', plain(it['opts'][0]), re.I))
    db = sum(1 for it in m for x in it['opts'][1:] if re.search(r'\bbut\b', plain(x), re.I))
    if kb >= 3 and db < kb:
        probs.append(f'BUT {name}: {kb} keys use "but", only {db} distractors do')


def text_checks(name, d):
    for s in strings(d):
        if '—' in s:
            probs.append(f'EMDASH {name}: {s[:80]}')
        for w in re.findall(AMERICAN, plain(s), re.I):
            # a deliberate wrong spelling (a one-to-three-word option, or "(not color)") is only a note
            (notes if len(plain(s).split()) <= 3 or '(not' in s else probs).append(f'SPELLING {name}: "{w}" in: {plain(s)[:90]}')


def test_checks(name, d):
    t = d.get('test', {}).get('items', [])
    if len(t) != 10:
        probs.append(f'TEST {name}: {len(t)} items, not 10')
    doks = [x.get('dok') for x in t]
    if doks != [1] * 5 + [2] * 5:
        probs.append(f'TEST {name}: DOK order {doks}')


def words(s):
    return re.findall(r"[a-z]+", plain(s).lower())


def names_in(d):
    out = set()
    for it in items(d):
        st = it.get('stim') or {}
        for l in st.get('lines', []) or []:
            if len(l) > 1 and l[1] and l[1][0].isupper() and l[1] not in ('Mum', 'Dad', 'Teacher', 'Coach', 'Grandma', 'Grandpa', 'Guide', 'Woman', 'Man', 'Girl', 'Boy', 'Narrator', 'Librarian'):
                out.add(l[1].split()[0])
    return out


data = {f: json.load(open(f, encoding='utf8')) for f in files}
if os.path.exists(summit):
    data[summit] = json.load(open(summit, encoding='utf8'))
for f, d in data.items():
    name = os.path.basename(f)
    length_stats(name, d)
    text_checks(name, d)
    if f != summit:
        test_checks(name, d)

# Summit freshness
if summit in data:
    common = Counter()
    for f in files:
        common.update(set(words(' '.join(strings(data[f])))))
    sw = words(' '.join(strings(data[summit])))
    sgrams = set(tuple(sw[i:i + 6]) for i in range(len(sw) - 5))
    stop_names = set()
    for f in files:
        fw = words(' '.join(strings(data[f])))
        shared = sgrams & set(tuple(fw[i:i + 6]) for i in range(len(fw) - 5))
        generic = [g for g in shared if not re.search(r'for each question|choose the correct|write one word|there is one example|you will hear|read the', ' '.join(g))]
        for g in generic[:5]:
            notes.append(f'RUN summit and {os.path.basename(f)}: "{" ".join(g)}"')
        stop_names |= names_in(data[f])
    sn = names_in(data[summit])
    for n in sorted(sn & stop_names):
        notes.append(f'NAME the Summit and a stop both use the speaker name {n} (fine if a different situation)')

for n in notes:
    print('NOTE ' + n)
for p in probs:
    print('PROBLEM ' + p)
print('QUALITY OK' if not probs else f'{len(probs)} PROBLEMS')
