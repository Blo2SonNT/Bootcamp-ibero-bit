
function cargar_imagen() {
    let mi_etiqueta = document.querySelector("#elemento-html")
    let url_user = document.getElementById("url_imagen_user").value
    // url_user = url_user.value

    mi_etiqueta.innerHTML = `
        <h1>La imagen es</h1>
        <div>
            <img src="${url_user}" class="w-75 rounded-2">
        </div>
    `
}

function que_carajos_hace_onblur(){
    console.log("Huy... esto es lo que hace")
    localStorage.setItem("nombre_2", "valor")
}