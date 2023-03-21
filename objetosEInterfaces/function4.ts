function normalizar(valor:string):string   //chamado overload se receber string vai retornar string
function normalizar(valor:string[]):string[]  // overload se receber array de string vai retornar array de string

function normalizar(valor:string | string[]):string | string[] {
    if(typeof valor=== "string") {
        return valor.trim().toLowerCase() // trim tira os espaços
    } else {
        return valor.map((item) => item.trim().toLowerCase())
    }
   
}

console.log(normalizar("         SOU RETARDADA         "))
console.log(normalizar(['EZREAL     ','SAMIRA      ','VARUS      ','TRISTANA      ']))


function $(seletor:"a"):HTMLAnchorElement | null
function $(seletor: "video"):HTMLVideoElement | null
function $(seletor:string):Element | null  // td overload

function $(seletor:string):Element | null {
    return document.querySelector(seletor)
}

$("a")?.click()
$("video")?.volume
$(".item")