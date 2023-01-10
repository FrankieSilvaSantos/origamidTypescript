function preencherDados(dados) {
    document.body.innerHTML += "\n    <div> \n    <h2> ".concat(dados.nome, " </h2>\n    <p> R$ ").concat(dados.preco, " </p>\n    <p> Inclui teclado: ").concat(dados.teclado ? 'Sim' : 'Não', "\n    </div>");
}
preencherDados({
    nome: "Computador",
    preco: 4000,
    teclado: true
});
preencherDados({
    nome: "Notebook",
    preco: 2500,
    teclado: true
});
