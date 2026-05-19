const cursor = document.querySelector("[data-cursor]");
const halo = document.querySelector("[data-cursor-halo]");
let x = 0;
let y = 0;
let hx = 0;
let hy = 0;

window.addEventListener("pointermove", (event) => {
  x = event.clientX;
  y = event.clientY;
  if (cursor) cursor.style.transform = `translate(${x}px, ${y}px)`;
});

const animateCursor = () => {
  hx += (x - hx) * 0.16;
  hy += (y - hy) * 0.16;
  if (halo) halo.style.transform = `translate(${hx}px, ${hy}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateCursor);
};
animateCursor();

