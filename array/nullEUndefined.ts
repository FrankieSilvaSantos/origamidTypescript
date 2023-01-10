const button = document.querySelector("button")
const config = localStorage.getItem("config")

if(button !== null) {
    button.click()
}

if(button) { // mesma coisa q o de cima
    button.click()
}

button?.click() // se tiver button vai fazer a açao do click


interface Product {
    nome?:string // pode ter ou nao ter um valor para nome
}

const jogo: Product = {
    nome: "League of Legends"
}

console.log(jogo.nome)