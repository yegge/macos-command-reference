const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const root = document.documentElement;
function safeGet(k){ try { return localStorage.getItem(k); } catch (e) { return null; } }
function safeSet(k,v){ try { localStorage.setItem(k,v); } catch (e) { /* no-op */ } }

root.setAttribute('data-theme', safeGet('theme') || 'dark');

document.getElementById('themeToggle').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  safeSet('theme', next);
});

const listEl  = document.getElementById('list');
const chipsEl = document.getElementById('chips');
const countEl = document.getElementById('count');
const emptyEl = document.getElementById('empty');
const qEl     = document.getElementById('q');
const caretEl = document.getElementById('caret');

let activeCat = null;
let total = 0;

DATA.forEach(group => {
  const sec = document.createElement('section');
  sec.className = 'cmd-section';
  sec.dataset.cat = group.cat;

  const head = document.createElement('div');
  head.className = 'cmd-sechead';
  const h2 = document.createElement('h2');
  h2.textContent = group.cat;
  const note = document.createElement('p');
  note.textContent = group.note;
  head.append(h2, note);
  sec.append(head);

  group.items.forEach(([name, desc, ex, tag]) => {
    total++;
    const row = document.createElement('div');
    row.className = 'cmd';
    row.dataset.search = (name + ' ' + desc + ' ' + ex + ' ' + group.cat).toLowerCase();

    const left = document.createElement('div');
    left.className = 'cmd-name';
    left.textContent = name;
    if (tag) {
      const t = document.createElement('span');
      t.className = 'tag tag--status';
      t.textContent = tag;
      left.append(document.createElement('br'), t);
    }

    const right = document.createElement('div');

    const p = document.createElement('p');
    p.className = 'cmd-desc';
    p.textContent = desc;

    const exWrap = document.createElement('div');
    exWrap.className = 'cmd-ex';
    const code = document.createElement('code');
    code.textContent = ex;
    const btn = document.createElement('button');
    btn.className = 'btn btn--sm cmd-copy';
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy the ' + name + ' example');
    btn.addEventListener('click', () => handleCopy(btn, code, ex));
    exWrap.append(code, btn);

    right.append(p, exWrap);
    row.append(left, right);
    sec.append(row);
  });

  listEl.append(sec);
});

const allChip = makeChip('All', null);
chipsEl.append(allChip);
DATA.forEach(g => chipsEl.append(makeChip(g.cat, g.cat)));
allChip.setAttribute('aria-pressed', 'true');

function makeChip(label, cat){
  const b = document.createElement('button');
  b.className = 'btn btn--sm cmd-chip';
  b.type = 'button';
  b.textContent = label;
  b.setAttribute('aria-pressed', 'false');
  b.addEventListener('click', () => {
    activeCat = (activeCat === cat) ? null : cat;
    [...chipsEl.children].forEach(c => c.setAttribute('aria-pressed', 'false'));
    (activeCat === null ? allChip : b).setAttribute('aria-pressed', 'true');
    apply();
  });
  return b;
}

async function handleCopy(btn, codeEl, text){
  const result = await copyText(text);
  if (result === 'manual') {
    selectNode(codeEl);
    setLabel(btn, 'Press \u2318C', 'manual', 3000);
  } else {
    setLabel(btn, 'Copied', 'done', 1400);
  }
}

async function copyText(text){
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return 'clipboard';
    }
    throw new Error('Clipboard API unavailable');
  } catch (e) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      if (ok) return 'exec';
      throw new Error('execCommand returned false');
    } catch (e2) {
      return 'manual';
    }
  }
}

function selectNode(node){
  try {
    const range = document.createRange();
    range.selectNodeContents(node);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } catch (e) { /* label still tells the user what to do */ }
}

function setLabel(btn, text, state, ms){
  btn.textContent = text;
  btn.dataset.state = state;
  clearTimeout(btn._t);
  btn._t = setTimeout(() => {
    btn.textContent = 'Copy';
    delete btn.dataset.state;
  }, ms);
}

function apply(){
  const q = qEl.value.trim().toLowerCase();
  const terms = q ? q.split(/\s+/) : [];
  let shown = 0;

  listEl.querySelectorAll('.cmd-section').forEach(sec => {
    let secShown = 0;
    const catOk = !activeCat || sec.dataset.cat === activeCat;
    sec.querySelectorAll('.cmd').forEach(row => {
      const match = catOk && terms.every(t => row.dataset.search.includes(t));
      row.hidden = !match;
      if (match) secShown++;
    });
    sec.hidden = secShown === 0;
    shown += secShown;
  });

  caretEl.hidden = qEl.value.length > 0;
  emptyEl.hidden = shown > 0;
  countEl.textContent = (q || activeCat)
    ? shown + (shown === 1 ? ' command matches' : ' commands match')
    : total + ' commands \u2014 start typing to filter';
}

qEl.addEventListener('input', apply);

document.getElementById('reset').addEventListener('click', () => {
  qEl.value = '';
  activeCat = null;
  [...chipsEl.children].forEach(c => c.setAttribute('aria-pressed', 'false'));
  allChip.setAttribute('aria-pressed', 'true');
  apply();
  qEl.focus();
});

document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement !== qEl) {
    e.preventDefault();
    qEl.focus();
  } else if (e.key === 'Escape' && document.activeElement === qEl) {
    qEl.value = '';
    apply();
  }
});

apply();
