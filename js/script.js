const hamburgericon = document.getElementById('hamburger')
const menu = document.getElementById('menu')

function toggleMenu() {
    hamburgericon.classList.toggle('toggle_hamburger')
    menu.classList.toggle('activate_menu')
}

hamburgericon.addEventListener('click', toggleMenu)