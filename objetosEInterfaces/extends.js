function extractText(elemento) {
    return {
        texto: elemento.innerText,
        elemento: elemento
    };
}
var link = document.querySelector("a");
if (link) {
    console.log(extractText(link).elemento);
}
