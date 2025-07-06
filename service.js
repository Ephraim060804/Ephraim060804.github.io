const expressTitle = document.querySelector("h1");
const expressSubtitle = document.querySelector("h4");
const nosVoyages = document.querySelector(".titre h1");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    expressTitle.classList.add("scrolled");
    expressSubtitle.classList.add("scrolled");
    nosVoyages.classList.add("scrolled");
  } else {
    expressTitle.classList.remove("scrolled");
    expressSubtitle.classList.remove("scrolled");
    nosVoyages.classList.remove("scrolled");
  }
});
