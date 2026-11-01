export function initNav(){
  const ham = document.getElementById('hamburger');
  const nl = document.querySelector('.nav-links');
  ham.addEventListener('click', () => { ham.classList.toggle('open'); nl.classList.toggle('open'); });
  nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open'); nl.classList.remove('open');
  }));

  const links = [...nl.querySelectorAll('a')];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => io.observe(s));

  const prog = document.getElementById('progress');
  const toTop = document.getElementById('toTop');
  addEventListener('scroll', () => {
    const h = document.documentElement;
    prog.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    toTop.classList.toggle('show', h.scrollTop > 600);
  }, { passive: true });
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
}
