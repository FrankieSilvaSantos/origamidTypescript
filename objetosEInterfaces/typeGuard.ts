function typeGuard(value: any) {
    if (typeof value === "string") {
        return value.toLocaleLowerCase()
    } else if (typeof value === "number") {
        return value.toFixed(1)
    } else if (value instanceof HTMLElement) {
        return value.innerText
    }
}

console.log(typeGuard("OLAA"))
console.log(typeGuard(2.3232))


const obj = {
    nome: "Origamid"
}

if ("preco" in obj) {  // vendo se existe a propriedade preço em obj
    console.log("existe")
} else {
    console.log("nao existe")
}


async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json")
    const json = await response.json()
    handleProduto(json)
}

interface Produto {
    nome: string,
    preco: number
}

function handleProduto(data: any) {
    console.log(data)
    if ("preco" in data) { //typeGuard verificando se existe a propriedade em produto com o in


        document.body.innerHTML += `
    <p>Nome: ${data.nome}</p>
    <p>Preço: ${data.preco}</p>`
    }
}

fetchProduto()
