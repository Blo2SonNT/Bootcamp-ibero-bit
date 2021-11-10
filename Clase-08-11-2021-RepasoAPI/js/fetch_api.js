let contenido_episodios = document.querySelector("#modal-episodios")
let episodios_personaje = []
let url_api = "https://rickandmortyapi.com/api/character"
let api_data = fetch(url_api)
console.log(api_data)

let div_pagina = document.querySelector("#contenido_personajes")

api_data.then(respuesta_api => respuesta_api.json())
    .then(info_personajes_data => {
        console.log(info_personajes_data)
        for (const info_personajes of info_personajes_data.results) {
            episodios_personaje = []
            episodios_personaje.push(info_personajes.episode)

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
                <div class="card align-items-center" data-bs-toggle="modal" data-bs-target="#modalDataEpisodios" onclick="data_episodios('${episodios_personaje}')">
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


function data_episodios(array_episodios) {
    contenido_episodios.innerHTML = ''
    var f = array_episodios.split(",")
    console.log(f)

    f.forEach(episodio => {
        contenido_episodios.innerHTML += `
            ${episodio} <br>
        `
    });
}


// "https://pokeapi.co/api/v2/pokemon
// ?
// offset=20
// &
// limit=20",