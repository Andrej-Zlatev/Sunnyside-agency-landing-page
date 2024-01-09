const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");
const arrow = document.querySelector(".arrow-link");

toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  arrow.classList.toggle("hidden");
});
