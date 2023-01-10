function toNumber(value) {
    if (typeof value === "number") {
        return value + " É numero";
    }
    else if (typeof value === "string") {
        return parseInt(value) + " virou numero";
    }
    else {
        throw "ERROR não string ou numero :c";
    }
}
console.log(toNumber("300"));
