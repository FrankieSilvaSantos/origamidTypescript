var links = document.querySelectorAll(".link");
function ativarElementoAnchor(elemento) {
    elemento.style.color = "red";
    elemento.style.border = "2px solid red";
}
function ativarElementoButton(elemento) {
    elemento.style.color = "blue";
    elemento.style.color = "2px solid blue";
}
links.forEach(function (link) {
    console.dir(link); // mostra a classe que gerou o elemento
    if (link instanceof HTMLAnchorElement) {
        ativarElementoAnchor(link);
    }
    if (link instanceof HTMLButtonElement) {
        ativarElementoButton(link);
    }
});
