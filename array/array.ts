const numeros = [10,20,30,40,50,60]
const valores = [10,20,'Taxas',30,'Produto',40,50,60]

function maiorQue10(data:Array<number>) {
    return data.filter(n => n> 10)

}

function filtrarValores(data:Array<number | string>) {
    return data.filter(item => typeof item ==="number")
}

console.log("Array filtrar valores: ", filtrarValores(valores))
console.log("Array maior que 10",maiorQue10(numeros))

const dados = [
["Senhor dos Aneis",80],
["A Guerra dos Tronos",120]

]