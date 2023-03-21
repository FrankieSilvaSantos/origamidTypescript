function somar(a:number,b:number, c?:number):number { // o ? significa q o c é opcional
    return a + b + (c ? c : 0) // se c existir vai ser o valor de c mas se nao existir vai ser zero
}

console.log(somar(3,4,6))


const subtrair = (a:number, b:number) => a - b

console.log(subtrair(4,3))

type CallBack = (event:MouseEvent) => void

function pintarTela(cor:string):void {
    document.body.style.background = cor
}

pintarTela("black")

function isString(value:any) {
    if(typeof value === "string")
    return true
}

console.log(isString("teste"))

console.log(isString(200))