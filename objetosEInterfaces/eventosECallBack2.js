//const button = document.querySelector("button")
//function handleClick(this:HTMLButtonElement,event:MouseEvent) {
//console.log(this)
//}
//button?.addEventListener("click",handleClick)
var button = document.querySelector("button");
function handleClick(event) {
    var elemento = event.currentTarget;
    if (elemento instanceof HTMLElement) {
        console.log(elemento.innerText);
    }
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", handleClick);
