function guardar_data() {
    // debugger
    let contador_data = 1

    if (localStorage.getItem("contador") == null) {
        localStorage.setItem('contador', contador_data)
    } else {
        contador_data = localStorage.getItem("contador")
    }

    var nombre = document.getElementById('nombre_user').value
    var telefono = document.getElementById('telefono_user').value
    var direccion = document.querySelector('#direccion_user').value

    localStorage.setItem("nombre_" + contador_data, nombre)
    localStorage.setItem("telefono_" + contador_data, telefono)
    localStorage.setItem("direccion_" + contador_data, direccion)
    contador_data = parseInt(contador_data) + 1
    localStorage.setItem("contador", contador_data)
    console.log(contador_data)

    let contador_actual = parseInt(contador_data) - 1
    listado_data(contador_actual)

}


function listado_data(contador_actual = 1, actualiza_tabla = false) {
    // debugger
    let body_tabla = document.querySelector("#data-usuario-read")

    let titulo_formulario = document.querySelector("#titulo_accion_formulario")
    titulo_formulario.innerHTML = `Insertar nuevo dato`

    if (actualiza_tabla) {
        let contador_futuro = localStorage.getItem('contador')
        for (let x = 1; x < contador_futuro; x++) {
            body_tabla.innerHTML += `
            <tr>
                <td>${localStorage.getItem('nombre_' + x)}</td>
                <td>${localStorage.getItem('telefono_' + x)}</td>
                <td>${localStorage.getItem('direccion_' + x)}</td>
                <td>
                    <i class="fas fa-pen mx-2" onclick="editar_elemento(${x})"></i>
                    <i class="fas fa-trash mx-2" onclick="borrar_elemento()"></i>
                </td>
            </tr>
            `
        }
    } else {
        body_tabla.innerHTML += `
        <tr>
            <td>${localStorage.getItem('nombre_' + contador_actual)}</td>
            <td>${localStorage.getItem('telefono_' + contador_actual)}</td>
            <td>${localStorage.getItem('direccion_' + contador_actual)}</td>
            <td>
                <i class="fas fa-pen mx-2" onclick="editar_elemento(${contador_actual})"></i>
                <i class="fas fa-trash mx-2" onclick="borrar_elemento()"></i>
            </td>
        </tr>
        `
    }


}

listado_data(1, true)


function editar_elemento(indice_dato) {
    let titulo_formulario = document.querySelector("#titulo_accion_formulario")
    titulo_formulario.innerHTML = `Actualizar dato`
    var input_nombre = document.getElementById('nombre_user')
    var input_telefono = document.getElementById('telefono_user')
    var input_direccion = document.getElementById('direccion_user')

    input_nombre.value = localStorage.getItem("nombre_" + indice_dato)
    input_telefono.value = localStorage.getItem("telefono_" + indice_dato)
    input_direccion.value = localStorage.getItem("direccion_" + indice_dato)

    console.log(input_nombre)
    console.log(input_telefono)
    console.log(input_direccion)
}

function editar_elemento_accion(indice_dato) {

}

function borrar_elemento() {
    console.error("Se borro")
}