window.addEventListener("load", () => {
  document.body.classList.remove("is-loading");
  document.querySelector("[data-loader]")?.classList.add("is-hidden");
});

document.body.classList.add("is-loading");

const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const toggle = document.querySelector("[data-menu-toggle]");

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
});

toggle?.addEventListener("click", () => menu?.classList.toggle("is-open"));
menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => menu.classList.remove("is-open")));

