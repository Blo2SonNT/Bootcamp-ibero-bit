// alert("Se creo el registro correctamente...")

// var nombre = prompt("Cual es tu nombre")
// console.log(nombre)

function nombre_cliente_evento() {
    var info = prompt("Cual es el nombre?")
    validar_cliente(info)
}


function validar_cliente(nombre_cliente = '') {
    if (nombre_cliente == "Juan") {
        console.log("enviaste el formulario..." + nombre_cliente)
    } else {
        console.error("No eres juan, no puedes enviar el formulario")
    }

}

/******************************************* */


function capturar_telefono(manda_alerta) {
    let numero = document.getElementById("num").value
    if (manda_alerta) {
        alert(numero)
    } else {
        console.log(numero)
    }
}