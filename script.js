const menu = document.querySelector(".menu-links")
const icon = document.querySelector(".hamburger-icon")

function toggleMenu() {
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.classList.remove("open")
        icon.classList.remove("open")
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("desktop-nav");
    var hamburger = document.getElementById("hamburger-nav");
    var initialHeight = 10;

    window.addEventListener("scroll", function () {
        // Ajusta o height quando a rolagem atinge 5
        if (window.scrollY > 5) {
            navbar.style.position = "fixed";
            navbar.style.top = "0";
            navbar.style.height = "5vh";

        } else {
            navbar.style.position = "static";
            navbar.style.top = "auto";
            navbar.style.height = initialHeight + "vh";

        }
    });
});