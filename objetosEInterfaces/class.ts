class Produto {
    nome:string
    preco:number
    constructor(nome:string,preco:number){
        this.nome = nome
        this.preco = preco
    }
    precoReal() {
        return `R$ ${this.preco}`
    }
}



const livro = new Produto("A Guerra dos Tronos",120)

console.log(livro.nome," Preço: ", livro.precoReal())

console.log(livro instanceof Produto) // pergunta se livro é uma instancia de Produto

console.log("=====================")

class Livro {
    autor:string
    constructor(autor:string) {
        this.autor = autor
    }
}



class Jogo {
    jogadores:number
    constructor(jogadores:number) {
        this.jogadores = jogadores
    }
}

function buscarProduto(busca:string) {
    if (busca ==="O Hobbit") {
        return new Livro("J. R. R. Tolkien")
    }
    if(busca ==="Dark Souls") {
        return new Jogo(1)
    } else {
        return "nao existe"
    }
}

const produto = buscarProduto("O Hobbit")
const produto2 = buscarProduto("Dark Souls")

if (produto instanceof Livro) { 
    console.log(produto.autor)
}

if (produto2 instanceof Jogo) {
    console.log(produto2.jogadores)
}