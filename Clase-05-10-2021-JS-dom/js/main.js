// document.write("ejemplo")

// alert("exito la pagina cargo")

// prompt("Cual es tu nombre")

// var numero = prompt("que numero desea agregar?")
// var nombre = prompt("Cual es su nombre?")

// console.log("El numero digitado es: " + numero)

// if (numero != "" && numero != null && numero >= 1) {

//     for (let x = 0; x <= numero; x++) {
// console.log("Hola " + nombre + " Estamos en el numero " + x)
//     }

// } else {

//     console.error("digite el numero")
// }




// var nombre = prompt("Cual es su nombre?")
// var numero = prompt("Hasta que numero deseas la lista?")
// let contenido = ''

// let titulo_web = document.querySelector("#nombre_usuario")
// titulo_web.innerHTML = `hola ${nombre}`

// for (let x = 0; x <= numero; x++) {
//     contenido += `<li>El numero es ${x}</li>`
// }

// let lista_web = document.getElementById("lista")
// lista_web.innerHTML = `
//     <ul>
//         ${contenido}
//     </ul>
// `

//Ejercicio 1 Taller
// let numero_ej1 = prompt("Hasta que numero desea sumar?")
// suma = 0
// mensaje = ''
// for (let x = 1; x <= numero_ej1; x++) {

//     mensaje = `La operación de ${x} + ${suma} es: `
//     suma = suma + x;
//     mensaje = mensaje + suma
//     console.log(mensaje);
// }

// for (let x=1; x<= numero_ej1; x++){

//     console.log(`La operación de ${x} + ${suma} es:`)
//     suma = suma + x;
//     console.log(suma);
// }


// let numero_ej1 = prompt("Hasta qué número desea sumar?");
// let suma = 0;
// let operacion = 0;

// for (let x = 1; x <= numero_ej1; x++) {

//     operacion = suma + x;
//     console.log(`La operación de ${x} + ${suma} es: ${operacion}`)
//     suma = suma + x;

// }


let tabla_multiplicar = prompt("cual tabla de multiplicar desea?")
let contador = 0
let mult = 0
let operacion = 0

for (let x = 1; x <= 10; x++) {
    mult = tabla_multiplicar * x
    console.log(`la operacion es ${tabla_multiplicar} + ${x} = ${mult}`)

}