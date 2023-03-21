var btnMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
    var nav = document.getElementById("nav");
    var button = event.currentTarget;
    console.log(event);
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle("active");
    if (button instanceof HTMLObjectElement) {
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Fechar Menu");
    }
}
btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.addEventListener("pointerdown", toggleMenu);
