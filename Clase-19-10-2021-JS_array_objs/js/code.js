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
    data_array.innerHTML += dato
})



let data_menu = document.querySelector("#menu_array")

menu_restaurante.forEach(function(dato_comida, posicion) {
    data_menu.innerHTML += `
        <option value="${parseInt(posicion)+1}">${dato_comida}</option>
    `
})


//Actualizar info de posicion especifica
info_personal[0] = "Deivis"

//Agregar elemento al final del array
info_personal.push('calle falsa 123')


//Agregar elemento al principio del array
info_personal.unshift("ejemplo")


//Eliminar el primer elemento
info_personal.shift()


//Eliminar el ultimo elemento del arrat
info_personal.pop()

//Unir dos arrays
var mi_nuevo_array = info_personal.concat(menu_restaurante)
console.log(mi_nuevo_array)

document.querySelector("#info_array2").innerHTML = mi_nuevo_array.join(' - ')

//Buscar la posicion de un elemento segun su valor
let la_posicion_malteada = menu_restaurante.indexOf("malteadas")
console.log("la posicion del elemento es: " + la_posicion_malteada)

//splice - agregar o eliminar un elemento en especifico
menu_restaurante.splice(la_posicion_malteada, 0, "dato nuevo")
console.log(menu_restaurante.sort())


//sort - ordena elementos del array

let numeros = [1, 8, 6, 10, 100, 4, 45, 22]
numeros.sort()
    // (8) [1, 10, 100, 22, 4, 45, 6, 8]
numeros.sort(function(a, b) { return a - b })
    // (8) [1, 4, 6, 8, 10, 22, 45, 100]
numeros.sort(function(a, b) { return b - a })
    // (8) [100, 45, 22, 10, 8, 6, 4, 1]