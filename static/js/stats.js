const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const node = entry.target;
    const raw = node.dataset.stat;
    const number = Number.parseInt(raw, 10);
    if (Number.isNaN(number)) { node.textContent = raw; return; }
    let current = 0;
    const step = Math.max(1, Math.ceil(number / 28));
    const tick = () => {
      current = Math.min(number, current + step);
      node.textContent = raw.replace(number, current);
      if (current < number) requestAnimationFrame(tick);
    };
    tick();
    statObserver.unobserve(node);
  });
}, { threshold: 0.7 });

document.querySelectorAll("[data-stat]").forEach((stat) => statObserver.observe(stat));

