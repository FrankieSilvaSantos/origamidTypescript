function preencherDados(dados) {
    document.body.innerHTML += "\n    <div>\n    <h2> ".concat(dados.nome, " </h2>\n    <p>R$ ").concat(dados.preco, " </p>\n    <p> Inclui teclado: ").concat(dados.teclado ? 'Sim' : 'Não', " </p>\n    </div>");
}
preencherDados({
    nome: 'Computador',
    preco: 5000,
    teclado: true
});
preencherDados({
    nome: 'Ipad',
    preco: 10000,
    teclado: false
});
preencherDados({
    nome: 'Laptop',
    preco: 2500,
    teclado: true
});
preencherDados({
    nome: 'Computador',
    preco: 3000,
    teclado: true
});
