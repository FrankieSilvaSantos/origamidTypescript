var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.precoReal = function () {
        return "R$ ".concat(this.preco);
    };
    return Produto;
}());
var livro = new Produto("A Guerra dos Tronos", 120);
console.log(livro.nome, " Preço: ", livro.precoReal());
console.log(livro instanceof Produto); // pergunta se livro é uma instancia de Produto
console.log("=====================");
var Livro = /** @class */ (function () {
    function Livro(autor) {
        this.autor = autor;
    }
    return Livro;
}());
var Jogo = /** @class */ (function () {
    function Jogo(jogadores) {
        this.jogadores = jogadores;
    }
    return Jogo;
}());
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("J. R. R. Tolkien");
    }
    if (busca === "Dark Souls") {
        return new Jogo(1);
    }
    else {
        return "nao existe";
    }
}
var produto = buscarProduto("O Hobbit");
var produto2 = buscarProduto("Dark Souls");
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto2 instanceof Jogo) {
    console.log(produto2.jogadores);
}
