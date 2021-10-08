function guardar_data() {
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
    let body_tabla = document.querySelector("#data-usuario-read")

    if (actualiza_tabla) {
        let contador_futuro = localStorage.getItem('contador')
        for (let x = 1; x < contador_futuro; x++) {
            body_tabla.innerHTML += `
            <tr>
                <td>${localStorage.getItem('nombre_' + x)}</td>
                <td>${localStorage.getItem('telefono_' + x)}</td>
                <td>${localStorage.getItem('direccion_' + x)}</td>
                <td></td>
            </tr>
            `
        }
    }else{
        body_tabla.innerHTML += `
        <tr>
            <td>${localStorage.getItem('nombre_' + contador_actual)}</td>
            <td>${localStorage.getItem('telefono_' + contador_actual)}</td>
            <td>${localStorage.getItem('direccion_' + contador_actual)}</td>
            <td></td>
        </tr>
        `
    }

    
}

listado_data(1, true)