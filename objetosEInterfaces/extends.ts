function extractText<tipo extends HTMLElement>(elemento:tipo) {
return {
    texto: elemento.innerText,
    elemento
}
}

const link = document.querySelector("a")

if(link) {
    console.log(extractText(link).elemento)
}