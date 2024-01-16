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