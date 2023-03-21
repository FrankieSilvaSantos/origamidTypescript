const button = document.querySelector("button")

function handleClick(event: PointerEvent) { // pointerEvent engloba ate o click do mobile
                                            // poderia usar o event mas seria mto vago
    console.log(event)
}

button?.addEventListener("pointerdown",handleClick) // usando o event poderia usar o click ao em vez do pointerdown
// porem n englobaria o click do mobile


function handleScroll(event: Event) {
    console.log(event)
}

window.addEventListener("scroll",handleScroll)

function ativarMenu(event: MouseEvent | TouchEvent | KeyboardEvent) { // ou so coloque event
 console.log(event)
}

document.documentElement.addEventListener("mousedown",ativarMenu)
document.documentElement.addEventListener("touchstart",ativarMenu)
document.documentElement.addEventListener("keydown",ativarMenu)