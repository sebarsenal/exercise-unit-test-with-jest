console.log("Hello World");

function sum(a, b) {
    return a + b
}
console.log(sum(7, 3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function (montoUSD) {
    let equivalencia = montoUSD / oneEuroIs.USD;
    let yenes = equivalencia * oneEuroIs.JPY;
    return Math.round(yenes);
}

const fromYenToPound = function (montoYen) {
    let equivalencia = montoYen * oneEuroIs.JPY;
    let libras = equivalencia / oneEuroIs.GBP;
    return Math.round(libras);
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };