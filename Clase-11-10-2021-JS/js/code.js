//funcion "optimizada"
function calculo_matematico(tipo_operacion) {
    var numero_1 = document.getElementById("numero_1_user").value
    var numero_2 = document.getElementById("numero_2_user").value
    var resultado = 0
    var input_resultado = document.getElementById("resultado")
    console.log(numero_1)
    console.log(numero_2)
    console.log(input_resultado)

    if (tipo_operacion == "suma") {
        resultado = parseInt(numero_1) + parseInt(numero_2)
    } else if (tipo_operacion == 'resta') {
        resultado = parseInt(numero_1) - parseInt(numero_2)
    } else if (tipo_operacion == 'multiplicacion') {
        resultado = numero_1 * numero_2
    } else if (tipo_operacion == 'division') {
        resultado = numero_1 / numero_2
    }

    input_resultado.value = resultado
    console.log(resultado)
}

//funciones por operacion

function sumar() {
    var numero_1_suma = document.getElementById("numero_1_user").value
    var numero_2_suma = document.getElementById("numero_2_user").value

    var input_resultado = document.getElementById("resultado")
    var resultado = ''

    resultado = parseInt(numero_1_suma) + parseInt(numero_2_suma)
    input_resultado.value = resultado
}

function restar() {
    var numero_1_resta = document.getElementById("numero_1_user").value
    var numero_2_resta = document.getElementById("numero_2_user").value

    var input_resultado = document.getElementById("resultado")
    var resultado = ''

    resultado = parseInt(numero_1_resta) - parseInt(numero_2_resta)
    input_resultado.value = resultado
}

function multiplicar() {
    var numero_1_multi = document.getElementById("numero_1_user").value
    var numero_2_multi = document.getElementById("numero_2_user").value

    var input_resultado = document.getElementById("resultado")
    var resultado = ''

    resultado = parseInt(numero_1_multi) * parseInt(numero_2_multi)
    input_resultado.value = resultado
}

function dividir() {
    var numero_1_dividir = document.getElementById("numero_1_user").value
    var numero_2_dividir = document.getElementById("numero_2_user").value

    var input_resultado = document.getElementById("resultado")
    var resultado = ''

    resultado = parseInt(numero_1_dividir) / parseInt(numero_2_dividir)
    input_resultado.value = resultado
}