interface Quadrado {
    lado:number,
    perimetro(lado:number):number
}

function calcular(forma:Quadrado) {
    forma.perimetro(3)
}