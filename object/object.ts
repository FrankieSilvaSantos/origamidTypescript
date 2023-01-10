function preencherDados (dados: {
    nome: string,
    preco: number,
    teclado: boolean
}) {
    document.body.innerHTML += `    
    <div>
    <h2> ${dados.nome} </h2>
    <p>R ${dados.preco} </p>
    <p> Inclui teclado: ${dados.teclado ? 'Sim' : 'Não' } </p>
    </div>
    `
}