const links = document.querySelectorAll(".link")

function ativarElementoAnchor(elemento: HTMLAnchorElement) {
    elemento.style.color = "red"
    elemento.style.border = "2px solid red"
}

function ativarElementoButton(elemento: HTMLButtonElement) {
    elemento.style.color ="blue"
    elemento.style.border = "2px solid blue"
}

links.forEach((link) => {
    console.dir(link) // mostra a classe que gerou o elemento(verificar na documentaçao dom)

    if(link instanceof HTMLAnchorElement) {
        ativarElementoAnchor(link)
    } if(link instanceof HTMLButtonElement) {
        ativarElementoButton(link)
    }

})

