const header = document.querySelector(".header-cl");
const mobileMenu = document.querySelector(".mobile-menu-icon");

mobileMenu.addEventListener("click", () => {
  header.classList.toggle("header-active");
});
