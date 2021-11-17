const operaciones = {}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

operaciones.sumar = sumar
operaciones.restar = restar
operaciones.multiplicar = multiplicar
operaciones.dividir = dividir

// module.exports = {
//     sumar,
//     restar,
//     multiplicar,
//     dividir
// }

module.exports = operaciones;