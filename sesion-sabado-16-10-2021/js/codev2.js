let div_resultado = document.getElementById("toma-dato")
let btn_guardar = document.querySelector("#btn-save")

function guardar_dato(editar_dato = false) {
    // debugger
    let nombre = document.getElementById("nombre_usuario").value
    if (localStorage.getItem('nombre_del_usuario') == nombre) {
        alert("ingrese un nombre diferente")
        return
    } else {
        localStorage.setItem("nombre_del_usuario", nombre)
    }
    div_resultado.innerHTML = `
    Su nombre es: ${localStorage.getItem("nombre_del_usuario")}
    <button type="button" class="btn btn-dark mt-4" onclick="editar_dato()">Editar</button>
    <button type="button" class="btn btn-warning mt-4" onclick="borrar_dato()">borrar</button>
    `
    document.getElementById("formulario-data").reset()
    if (editar_dato) {
        btn_guardar.setAttribute("onclick", "guardar_dato()")
        btn_guardar.className = 'btn btn-danger'
    }
}

function editar_dato() {
    console.log("editando dato")
    let input_nombre = document.getElementById("nombre_usuario")
    input_nombre.value = localStorage.getItem("nombre_del_usuario")
    btn_guardar.setAttribute("onclick", "guardar_dato(true)")
    btn_guardar.className = 'btn btn-primary'
}

function borrar_dato() {
    // localStorage.clear()
    localStorage.removeItem("nombre_del_usuario")
    div_resultado.innerHTML = ''
}