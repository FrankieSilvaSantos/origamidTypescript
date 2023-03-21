var button = document.querySelector("button");
function handleClick(event) {
    // poderia usar o event mas seria mto vago
    console.log(event);
}
button === null || button === void 0 ? void 0 : button.addEventListener("pointerdown", handleClick); // usando o event poderia usar o click ao em vez do pointerdown
// porem n englobaria o click do mobile
function handleScroll(event) {
    console.log(event);
}
window.addEventListener("scroll", handleScroll);
function ativarMenu(event) {
    console.log(event);
}
document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
document.documentElement.addEventListener("keydown", ativarMenu);
