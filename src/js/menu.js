const menuButton = document.querySelector(".menu-button");
const headerNav = document.querySelector(".header-nav");

menuButton.addEventListener("click", () => {
    headerNav.classList.toggle("active");

    const isOpen = headerNav.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);
});