function abortar(mensagem:string): never { //quebra o script
    throw new Error(mensagem)
}

abortar("Ocorreu um erro")
console.log("tente novamente")