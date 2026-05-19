const canvas = document.getElementById("particle-canvas");
const context = canvas?.getContext("2d");
const particles = [];
const particleCount = 72;

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
}

function createParticles() {
  particles.length = 0;
  for (let i = 0; i < particleCount; i += 1) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
    });
  }
}

function drawParticles() {
  if (!context || !canvas) return;
  context.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, index) => {
    p.x += p.vx * devicePixelRatio;
    p.y += p.vy * devicePixelRatio;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    const glow = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5 * devicePixelRatio);
    glow.addColorStop(0, "rgba(255, 255, 255, 0.94)");
    glow.addColorStop(0.5, "rgba(232, 232, 230, 0.72)");
    glow.addColorStop(1, "rgba(188, 188, 194, 0)");
    context.beginPath();
    context.arc(p.x, p.y, p.r * 2.2 * devicePixelRatio, 0, Math.PI * 2);
    context.fillStyle = glow;
    context.fill();

    for (let j = index + 1; j < particles.length; j += 1) {
      const q = particles[j];
      const distance = Math.hypot(p.x - q.x, p.y - q.y);
      if (distance < 120 * devicePixelRatio) {
        context.strokeStyle = `rgba(232, 232, 230, ${0.13 - distance / (980 * devicePixelRatio)})`;
        context.beginPath();
        context.moveTo(p.x, p.y);
        context.lineTo(q.x, q.y);
        context.stroke();
      }
    }
  });
  requestAnimationFrame(drawParticles);
}

if (canvas && context) {
  resizeCanvas();
  createParticles();
  drawParticles();
  window.addEventListener("resize", () => { resizeCanvas(); createParticles(); });
}
