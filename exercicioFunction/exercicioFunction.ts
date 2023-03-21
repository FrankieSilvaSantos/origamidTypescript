function roundUp(a:number):number
function roundUp(a:string):string
function roundUp(a:number | string): number | string{
    if(typeof a ==="number") {
    return Math.ceil(a)
    } else {
        return Math.ceil(Number(a)).toString()
    }
}

console.log(roundUp(3.55))
console.log(roundUp("2.5555"))