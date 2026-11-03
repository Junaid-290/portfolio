const ORDER = ['seamist', 'deepsea', 'predawn', 'dawnbreak'];
const ICONS = {  seamist: '\uD83C\uDF2B\uFE0F', deepsea: '\uD83C\uDF0A', predawn: '\uD83C\uDF05', dawnbreak: '\u2600\uFE0F' };
const NAMES = { seamist: 'Sea Mist', deepsea: 'Deep Sea', predawn: 'Predawn', dawnbreak: 'Dawn Break' };
const KEY = 'ja-theme';

export function initTheme(){
  const btn = document.getElementById('themeBtn');
  const apply = t => {
    if (t === 'predawn') document.body.removeAttribute('data-theme');
    else document.body.dataset.theme = t;
    btn.textContent = ICONS[t];
    btn.title = NAMES[t] + ' - click to change';
    try { localStorage.setItem(KEY, t); } catch (e) {}
  };
  let cur = 'predawn';
  try { cur = localStorage.getItem(KEY) || 'predawn'; } catch (e) {}
  if (!ORDER.includes(cur)) cur = 'predawn';
  apply(cur);
  btn.addEventListener('click', () => { cur = ORDER[(ORDER.indexOf(cur) + 1) % ORDER.length]; apply(cur); });
}
