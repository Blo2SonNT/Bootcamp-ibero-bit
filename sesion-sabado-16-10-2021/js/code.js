let div_resultado = document.getElementById("toma-dato")
let btn_guardar = document.querySelector("#btn-save")

function guardar_dato() {
    // debugger
    let nombre = document.getElementById("nombre_usuario").value
    localStorage.setItem("nombre_del_usuario", nombre)
    div_resultado.innerHTML = `
    Su nombre es: ${localStorage.getItem("nombre_del_usuario")}
    <button type="button" class="btn btn-dark mt-4" onclick="editar_dato()">Editar</button>
    `
    document.getElementById("formulario-data").reset()
}

function editar_dato() {
    console.log("editando dato")
    let input_nombre = document.getElementById("nombre_usuario")
    input_nombre.value = localStorage.getItem("nombre_del_usuario")
    btn_guardar.setAttribute("onclick", "guardar_dato_editado()")
    btn_guardar.className = 'btn btn-primary'
}

function guardar_dato_editado() {
    console.log("guardando el dato editado")
    let nombre = document.getElementById("nombre_usuario").value
    localStorage.setItem("nombre_del_usuario", nombre)
    div_resultado.innerHTML = `
    Su nombre es: ${localStorage.getItem("nombre_del_usuario")}
    <button type="button" class="btn btn-dark mt-4" onclick="editar_dato()">Editar</button>
    `
    document.getElementById("formulario-data").reset()
    btn_guardar.setAttribute("onclick", "guardar_dato()")
    btn_guardar.className = 'btn btn-danger'
}