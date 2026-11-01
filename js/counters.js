export function initCounters(){
  const section = document.querySelector('.stats-section');
  if (!section) return;
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.count').forEach(el => {
      const target = +el.dataset.target, t0 = performance.now(), dur = 1500;
      (function step(t){
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step); else el.textContent = target;
      })(t0);
    });
    io.unobserve(e.target);
  }), { threshold: .4 });
  io.observe(section);
}
