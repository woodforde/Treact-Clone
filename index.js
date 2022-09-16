function openMenu() {
    document.body.classList += " menu--open";
    document.body.classList.remove('menu--close');
}

function closeMenu() {
    document.body.classList += " menu--close";
    document.body.classList.remove('menu--open');
}