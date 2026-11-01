const WORDS = ['Full-Stack Web Apps.', 'REST APIs.', 'Accessible UIs.', 'Clean Code.'];
export function initTyped(){
  const el = document.getElementById('typed');
  if (!el) return;
  let wi = 0, ci = 0, del = false;
  (function tick(){
    const w = WORDS[wi];
    el.textContent = w.slice(0, ci);
    if (!del){ ci++; if (ci > w.length){ del = true; return setTimeout(tick, 1500); } }
    else { ci--; if (ci === 0){ del = false; wi = (wi + 1) % WORDS.length; } }
    setTimeout(tick, del ? 36 : 70);
  })();
}
