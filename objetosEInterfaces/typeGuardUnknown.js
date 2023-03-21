/* function typeGuar(value:unknown) {
    if (typeof value ==="string") {
        return value.toLowerCase()
    } if (typeof value==="number") {
        return value.toFixed(1)
    } if(value instanceof HTMLElement) {
        return value.innerText
    }
}

typeGuard("Ori") */
function typeGuard(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value.toFixed(1);
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
console.log(typeGuard("origamid"));
console.log(typeGuard(200.31231));
console.log(typeGuard(document.body));
