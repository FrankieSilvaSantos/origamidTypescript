interface Produto {
    nome:string,
    preco: number,
    teclado: boolean

}

function preencherDados(dados: Produto) {
    document.body.innerHTML += `
    <div>
    <h2> ${dados.nome} </h2>
    <p>R$ ${dados.preco} </p>
    <p> Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'} </p>
    </div>`
}

preencherDados({
    nome: 'Computador',
    preco: 5000,
    teclado: true

})

preencherDados({
    nome: 'Ipad',
    preco: 10000,
    teclado: false

})

preencherDados({
    nome: 'Laptop',
    preco: 2500,
    teclado: true

})

preencherDados({
    nome: 'Computador',
    preco: 3000,
    teclado: true

})