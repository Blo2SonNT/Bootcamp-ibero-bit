let url_api = "https://rickandmortyapi.com/api/character"
let api_data = fetch(url_api)
console.log(api_data)

let div_pagina = document.querySelector("#contenido_personajes")

api_data.then(respuesta_api => respuesta_api.json())
    .then(info_personajes_data => {
        console.log(info_personajes_data)
        for (const info_personajes of info_personajes_data.results) {
            switch (info_personajes.status) {
                case "Alive":
                    info_personajes.status = "Vivo"
                    break
                case "Dead":
                    info_personajes.status = "Muerto"
                    break
                case "unknown":
                    info_personajes.status = "Desconocido"
                    break
            }

            div_pagina.innerHTML += `
            <div class="col">
                <div class="card align-items-center">
                    <figure class="hover-img w-100 card-img-top">
                        <img src="${info_personajes.image}">
                        <figcaption>
                            <h3>${info_personajes.status}</h3>
                        </figcaption>
                    </figure>
                    <div class="card-body">
                        <h5 class="card-title">${info_personajes.name}</h5>
                    </div>
                </div>
            </div>
            `
        }


    }).catch(error => { console.log(error) })