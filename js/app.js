// Adds interactivity for menu bar
const navSlider = () => {
    let menu_bar = document.querySelector(".menu-bar");
    let nav = document.getElementById('nav-bar__slider');

    // toggles 'X' and hamburger
    menu_bar.classList.toggle('toggle');

    // slide left animation for menu box
    nav.classList.toggle('active');
}
