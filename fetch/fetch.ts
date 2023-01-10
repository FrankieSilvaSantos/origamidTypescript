async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json')
    const data = await response.json()
    showProduct(data)
    console.log(data)
}

interface Empresa {
    fundacao: number,
    nome: string,
    pais:string
}

fetchProduct()
interface Product {
    nome: string,
    preco: number,
    descricao: string,
    garantia: string,
    seguroAcidentes: boolean,
    empresaFabricante: Empresa
    empresaMontadora: Empresa
}


function showProduct(data: Product) {
    document.body.innerHTML += `
    <div>
    <h2> ${data.nome} </h2>
    <p> ${data.preco} </p>
    <p> ${data.descricao} </p>
    <p> ${data.garantia} </p>
    <p> ${data.seguroAcidentes} </p>
    </div>
    
    <div>
    <h3> Empresa Fabricante: ${data.empresaFabricante.nome} </h3>
    <p> ${data.empresaFabricante.fundacao} </p>
    <p> ${data.empresaFabricante.pais} </p>

    <div>
    <h3> Empresa Fabricante: ${data.empresaMontadora.nome} </h3> 
    <p> ${data.empresaFabricante.fundacao} </p>
    <p> ${data.empresaMontadora.pais} </p>
    </div>
    </div>`
}