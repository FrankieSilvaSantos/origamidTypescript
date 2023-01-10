async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json")
    const data = await response.json()
    showData(data)
    console.log(data)
}
fetchCursos()
interface Cursos {
    nome:string,
    horas:number,
    aulas:number,
    gratuito:boolean,
    tags:Array<string>
    idAulas:Array<number>,
    nivel:"iniciante" | "avancado"
}

function showData(data: Cursos[]) {
    data.forEach(data => {
        let color
        if(data.nivel ==="iniciante") {
            color ="blue"
        }else if (data.nivel === "avancado") {
            color = "red"
        }
    
    document.body.innerHTML += `
    <div>
    <h2 style ="color: ${color}">${data.nome}</h2>
    <p>Horas: ${data.horas}</p>
    <p>Aulas: ${data.aulas}</p>
    <p>Tags: ${data.tags.join(", ")}</p>
    <p>IDAulas: ${data.idAulas.join(", ")}</p>
    <p>Nível: ${data.nivel}</p>
    </div>`
})
}