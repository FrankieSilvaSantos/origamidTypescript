var links2 = document.querySelectorAll(".link");
function ativarElemento(elemento2) {
    elemento2.style.color = "red";
    elemento2.style.border = "red solid 2px";
}
links2.forEach(function (link2) {
    console.dir(link2); // mostra a classe que gerou o elemento
    if (link2 instanceof HTMLElement) {
        ativarElemento(link2);
    }
});
