const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");
const main = document.querySelector("main");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("active");
});

nav.addEventListener("click", () => {
  nav.classList.remove("active");
  menu.classList.remove("active");
});

main.addEventListener("click", () => {
  nav.classList.remove("active");
  menu.classList.remove("active");
});
