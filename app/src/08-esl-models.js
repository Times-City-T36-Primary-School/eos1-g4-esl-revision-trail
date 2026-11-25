/* 08-esl-models.js - the ESL question models (Grade 5, Cambridge Primary ESL Stage 6), beside mcq and fill
   (07-g5-models-base.js). No page code here.

   tfill { type: 'tfill', q, lines: ['She {0} lived here since 2019.'], ans: [['has', "'s"]], fig?, hint?, worked? }
         Typed words. Each box takes any of its answers; capitals, curly quotes, spaces and a full stop at the end
         do not matter. Spelling does. The boxes are typed with the keyboard or the on-screen letter pad.
         A wrong answer one letter away says "Very close!", except when the typed word is a real word that is often
         mixed up with the answer (then / than, were / where: CONFUSED), which gets the item's own help instead.
         A gap in a listening task (fig.kind 'audio') says "Listen again", not "look at the words around the gap".
   bank  { type: 'bank', q, bank: [['A', 'text'], ...], ans: 'E', fig?, hint?, worked? }
         Choose one letter from a bank (a conversation with gaps, people and texts to match). The bank keeps its
         letter order, so the letters on screen are the letters of the paper. */
(function () {
"use strict";
const M = MX.M, LET = MX.LET;

const norm = function (s) {
  return String(s == null ? '' : s).toLowerCase().replace(/[‘’`´]/g, "'").replace(/\s+/g, ' ')
    .replace(/^[\s.,!?;:]+|[\s.,!?;:]+$/g, '').trim();
};
MX.norm = norm;

M.tfill = function (d) {
  const ans = (d.ans || []).map(function (a) { return (Array.isArray(a) ? a : [a]).map(String); });
  const blanks = ans.map(function (a) {
    const longest = Math.max.apply(null, a.map(function (x) { return x.length; }));
    return { len: Math.max(14, longest + 6), w: longest > 9 ? 'wordl' : 'word', text: true };
  });
  const w = typeof d.worked === 'string' ? { text: d.worked } : d.worked || {};
  const fig = d.fig || {};
  const heard = fig.k === 'stim' && fig.kind === 'audio';
  const said = heard ? (fig.lines || []).map(function (l) { return String(l[2] || ''); }).join(' ') : '';
  const help = d.msg || (typeof d.hint === 'string' ? d.hint : d.hint && d.hint.step) || '';
  return {
    q: d.q, sub: d.sub || '', marks: 1, lines: d.lines, blanks: blanks, fig: d.fig || null,
    check: function (r) {
      const parts = ans.map(function (a, i) { const got = norm((r.v || [])[i]); return a.some(function (x) { return norm(x) === got; }); });
      if (parts.every(Boolean)) return { ok: true, parts: parts };
      const i = parts.indexOf(false), got = norm((r.v || [])[i]);
      const mixed = ans[i].some(function (x) { return confused(norm(x), got); });
      const close = !mixed && ans[i].some(function (x) { return lev(norm(x), got) === 1; });
      // a name spelled letter by letter in the recording (W-E-B-B)
      const spelled = heard && ans[i].some(function (x) { return x.length > 1 && said.indexOf(x.toUpperCase().split('').join('-')) >= 0; });
      const other = heard ? (spelled ? 'Listen again to the letters. Write every letter.' : 'Listen again. Write exactly what you hear.')
        : 'Look again at the words before and after the gap.';
      return { ok: false, parts: parts, msg: close ? 'Very close! Check the spelling.' : mixed ? help || other : d.msg || other };
    },
    hint: d.hint || null,
    worked: { text: w.text || '', pic: w.pic || null },
    yes: d.yes || '',
    key: ans.map(function (a) { return a[0]; }).join(' ; '), fill: ans.map(function (a) { return a[0]; })
  };
};

// real words that children often mix up: one letter apart, but a different word (not a spelling slip)
const CONFUSED = [['then', 'than'], ['were', 'where'], ['wear', 'where'], ['were', 'we\'re'], ['there', 'their'], ['there', 'three'],
  ['to', 'too'], ['to', 'two'], ['of', 'off'], ['quite', 'quiet'], ['an', 'and'], ['who', 'how'], ['buy', 'by'], ['by', 'bye'],
  ['its', 'it\'s'], ['your', 'you\'re'], ['form', 'from'], ['our', 'out'], ['hear', 'here'], ['know', 'now'], ['no', 'on'],
  ['was', 'saw'], ['live', 'life'], ['lose', 'loose'], ['were', 'wore'], ['which', 'witch'], ['what', 'want'], ['some', 'same'],
  ['in', 'on'], ['at', 'it'], ['is', 'it'], ['he', 'she'], ['his', 'he\'s'], ['this', 'these'], ['much', 'such'], ['for', 'four']];
function confused(a, b) {
  return a !== b && CONFUSED.some(function (p) { return (p[0] === a && p[1] === b) || (p[0] === b && p[1] === a); });
}

// how many letters apart two words are (one slip = "Very close!")
function lev(a, b) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 1) return 2;
  const m = [];
  for (let i = 0; i <= a.length; i++) { m[i] = [i]; }
  for (let j = 1; j <= b.length; j++) m[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) {
    m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  }
  return m[a.length][b.length];
}

M.bank = function (d) {
  const bank = d.bank || [];
  const opts = bank.map(function (b) { return { html: b[1], ok: b[0] === d.ans, why: '' }; });
  const right = opts.findIndex(function (o) { return o.ok; });
  const w = typeof d.worked === 'string' ? { text: d.worked } : d.worked || {};
  return {
    q: d.q, sub: d.sub || 'Choose the best letter.', letters: true, bankLetters: bank.map(function (b) { return b[0]; }),
    opts: opts, fig: d.fig || null,
    check: function (r) { const o = opts[r.pick]; return o && o.ok ? { ok: true } : { ok: false, msg: d.msg || 'Read the line before AND the line after the gap.' }; },
    hint: d.hint || null,
    worked: { text: w.text || '', pic: w.pic || null },
    yes: d.yes || '',
    key: (bank[right] ? bank[right][0] + ': ' + String(bank[right][1]).replace(/<[^>]+>/g, '') : '')
  };
};
})();
