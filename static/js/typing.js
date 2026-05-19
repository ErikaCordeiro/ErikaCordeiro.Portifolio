const typingTarget = document.querySelector("[data-typing]");
if (typingTarget) {
  const text = typingTarget.dataset.typing;
  let index = 0;
  const type = () => {
    typingTarget.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) window.setTimeout(type, 32);
  };
  window.setTimeout(type, 450);
}

