
const { sum } = require('./app.js');

test('suma de 14+9 es igual a 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2);
    //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("Un USD equivale a  Yenes", function () {
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(5.2)).toBe(554);
})

test("Un USD equivale a  Yenes", function () {
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromYenToPound(12.3)).toBe(1966);
})