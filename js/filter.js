export function initFilter(){
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const f = b.dataset.f;
    cards.forEach(c => {
      const show = f === 'all' || c.dataset.cat.split(' ').includes(f);
      c.classList.toggle('hide', !show);
      if (show){
        c.classList.remove('in');
        requestAnimationFrame(() => requestAnimationFrame(() => c.classList.add('in')));
      }
    });
  }));
}
