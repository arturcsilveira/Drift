const menuButton = document.querySelector(".header-menu-button");
const headerNav = document.querySelector(".header-nav");

if (menuButton && headerNav) {
  menuButton.addEventListener("click", () => {
    headerNav.classList.toggle("active");

    const isOpen = headerNav.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);
  });
}
