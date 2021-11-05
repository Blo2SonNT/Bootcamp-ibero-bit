function suma(num1, num2) {
    return parseInt(num1) + parseInt(num2)
}

function division(num1, num2) {
    return num1 / num2
}

function calcular_data(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calcular_data(3, 5, suma))