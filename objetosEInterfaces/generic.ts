function retorno<variavel>(a:variavel):variavel { // o retorno ta recebendo uma variavel
    return a   // o parametro a: esta sendo informado q é do tipo variavel e que está retornando a uma variavel
}                // chamada variavel

console.log(retorno("A game"))
console.log(retorno(200))
console.log(retorno(true))

console.log("================")


const numeros = [1,2,3,4,5,6,7,8,9]
const frutas = ['Banana','Pera','Uva','Laranja','Limao','Maça']

function firstFive(lista:number[]) {
    return lista.slice(0,5)
}


console.log(firstFive(numeros))

console.log("======")



function firstFive2<tipoLista>(lista:tipoLista[]):tipoLista[] {
    return lista.slice(0,5)
}


console.log(firstFive2(frutas))


console.log("=================")


function notNUll<tipoVariavel>(argumento:tipoVariavel) {
    if(argumento!== null) {
        return argumento
    } else {
        return null 
    }
}

console.log(notNUll('Denji')?.toLowerCase())
console.log(notNUll(2.2333)?.toFixed(1))


console.log('=============')

function tipoDado<tipoDado>(a:tipoDado) {
    const resultado = {
        dado: a,
        tipo: typeof a
    }
    console.log(resultado)
    return resultado
}


console.log(tipoDado('teste').tipo)
console.log(tipoDado(true).tipo)