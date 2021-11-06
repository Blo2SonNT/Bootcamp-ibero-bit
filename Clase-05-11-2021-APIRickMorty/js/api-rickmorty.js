function consumo_api(pagina = 1, busqueda = false) {

    let input_busqueda = document.getElementById("busqueda_personaje").value

    if (!busqueda) {
        if (pagina == 1) {
            var api_url = 'https://rickandmortyapi.com/api/character'
        } else {
            var api_url = pagina
        }
    } else {
        var api_url = 'https://rickandmortyapi.com/api/character?name=' + input_busqueda
    }

    let api = fetch(api_url)
    let estado = ''
    let div_pag = document.querySelector("#paginacion")
    let disabled_prev = ''
    let disabled_next = ''


    // let contenedor_pagina = document.querySelectorAll(".class-contenido")
    // console.log(contenedor_pagina[1])


    let contenedor_pagina = document.querySelector("#contenido-api")

    api.then(res => res.json())
        .then(data => {
            console.log(data)
            contenedor_pagina.innerHTML = ''
            for (const data_personaje of data.results) {
                if (data_personaje.status == "Alive") {
                    estado = "vivo"
                } else if (data_personaje.status == "Dead") {
                    estado = "muerto"
                } else if (data_personaje.status == 'unknown') {
                    estado = "desconocido"
                }

                contenedor_pagina.innerHTML += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${data_personaje.image}" class="card-img-top">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">${data_personaje.name}</h5>
                                <div class="estado ${estado}"></div>
                            </div>
                        </div>
                    </div>
                </div>
                `

                // console.log(data_personaje)
            }
            if (data.info.prev == null) {
                disabled_prev = `disabled`
            } else if (data.info.next == null) {
                disabled_next = `disabled`
            }

            div_pag.innerHTML = `
                <button class="btn btn-dark" ${disabled_prev} onclick="consumo_api('${data.info.prev}')">Anterior</button>
                <button class="btn btn-dark" ${disabled_next} onclick="consumo_api('${data.info.next}')">Siguiente</button>
            `
        }).catch(error => console.log(error))
}


consumo_api(1)