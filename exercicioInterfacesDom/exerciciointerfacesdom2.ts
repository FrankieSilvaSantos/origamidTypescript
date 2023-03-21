const links2 = document.querySelectorAll(".link")

function ativarElemento(elemento2: HTMLElement) {
    
        elemento2.style.color ="red"
        elemento2.style.border = "red solid 2px"
   
}

links2.forEach((link2) =>{
    console.dir(link2) // mostra a classe que gerou o elemento(verificar na documentação DOM )
    if (link2 instanceof HTMLElement) {
        ativarElemento(link2)
    }
})