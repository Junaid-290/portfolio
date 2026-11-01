const ORDER = ['midnight', 'porcelain', 'arctic', 'sunset'];
const ICONS = { midnight: '\uD83C\uDF19', porcelain: '\uD83C\uDF38', arctic: '\u2744\uFE0F', sunset: '\uD83C\uDF07' };
const NAMES = { midnight: 'Midnight Rose', porcelain: 'Porcelain Light', arctic: 'Arctic Blue', sunset: 'Sunset Ember' };
const KEY = 'fj-theme';

export function initTheme(){
  const btn = document.getElementById('themeBtn');
  const apply = t => {
    if (t === 'midnight') document.body.removeAttribute('data-theme');
    else document.body.dataset.theme = t;
    btn.textContent = ICONS[t];
    btn.title = NAMES[t] + ' - click to change';
    try { localStorage.setItem(KEY, t); } catch (e) {}
  };
  let cur = 'midnight';
  try { cur = localStorage.getItem(KEY) || 'midnight'; } catch (e) {}
  if (!ORDER.includes(cur)) cur = 'midnight';
  apply(cur);
  btn.addEventListener('click', () => { cur = ORDER[(ORDER.indexOf(cur) + 1) % ORDER.length]; apply(cur); });
}
