var _a, _b;
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase(); // trim tira os espaços
    }
    else {
        return valor.map(function (item) { return item.trim().toLowerCase(); });
    }
}
console.log(normalizar("         SOU RETARDADA         "));
console.log(normalizar(['EZREAL     ', 'SAMIRA      ', 'VARUS      ', 'TRISTANA      ']));
function $(seletor) {
    return document.querySelector(seletor);
}
(_a = $("a")) === null || _a === void 0 ? void 0 : _a.click();
(_b = $("video")) === null || _b === void 0 ? void 0 : _b.volume;
$(".item");
