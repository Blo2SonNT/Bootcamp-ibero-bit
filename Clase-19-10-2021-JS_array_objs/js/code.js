// String
// Number
// Boolean
// null
// undefined


// Array
// Objectos

//ARRAY

var info_personal = ["Miguel", 85, "correo@correo.com", "3142539731", 8]
var menu_restaurante = ["arroz con pollo", "pizza", "malteadas", "pollo frito"]
console.log(info_personal)
console.log(menu_restaurante)

let data_array = document.getElementById("info_array")

info_personal.forEach(function(dato) {
    // console.log(dato)
    data_array.innerHTML += info_personal.toString
})

let data_menu = document.querySelector("#menu_array")

menu_restaurante.forEach(function(dato_comida, posicion) {
    data_menu.innerHTML += `
        <option value="${parseInt(posicion)+1}">${dato_comida}</option>
    `
})


//Agregar elemento al final del array
info_personal.push('calle falsa 123')


//Actualizar info de posicion especifica
info_personal[0] = "Deivis"


//Agregar elemento al principio del array
info_personal.unshift("ejemplo")


//Eliminar el primer elemento
info_personal.shift()