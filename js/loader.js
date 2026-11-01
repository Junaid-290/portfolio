export function initLoader(){
  const el = document.getElementById('loader');
  const hide = () => el.classList.add('done');
  window.addEventListener('load', () => setTimeout(hide, 1000));
  setTimeout(hide, 3000);
}
