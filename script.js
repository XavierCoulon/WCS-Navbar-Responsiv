const nav = document.querySelector("nav");
const logoMenu = document.querySelector(".nav-menu-hamburger");

logoMenu.addEventListener("click", function () {
  nav.classList.toggle("active");
});
