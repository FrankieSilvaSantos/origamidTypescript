function somar(a, b, c) {
    return a + b + (c ? c : 0); // se c existir vai ser o valor de c mas se nao existir vai ser zero
}
console.log(somar(3, 4, 6));
var subtrair = function (a, b) { return a - b; };
console.log(subtrair(4, 3));
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela("black");
function isString(value) {
    if (typeof value === "string")
        return true;
}
console.log(isString("teste"));
console.log(isString(200));
