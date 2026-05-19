document.querySelectorAll(".contact-form input, .contact-form textarea").forEach((field) => {
  field.addEventListener("focus", () => field.parentElement?.classList.add("is-focused"));
  field.addEventListener("blur", () => field.parentElement?.classList.remove("is-focused"));
});

