let url_pokemon = "https://pokeapi.co/api/v2/pokemon/pikachu"
let info_api = fetch(url_pokemon)
let url_api = "https://pokeapi.co/api/v2/pokemon/"

info_api.then(respuesta_api => respuesta_api.json())
    .then(poke_info => {
        // console.log(poke_info.species.url)
        let url_evolucion_posterior = poke_info.species.url

        let img_pokemon_principal = poke_info.sprites.other.dream_world.front_default
        let div_contenido = document.getElementById("lista-evolucion")
        div_contenido.innerHTML += `
            <img src="${img_pokemon_principal}" alt="">
        
        `

        info_involucion = fetch(url_evolucion_posterior)
        info_involucion.then(res_involucion => res_involucion.json())
            .then(poke_involucion => {
                console.log(poke_involucion.evolves_from_species.name)
                let info_evolucion_ant = fetch(url_api + poke_involucion.evolves_from_species.name)
                info_evolucion_ant.then(respuesta_api_ant => respuesta_api_ant.json())
                    .then(ant_pokemon => {
                        console.log(ant_pokemon.sprites.other.dream_world.front_default)
                        div_contenido.innerHTML += `
                            <br>
                            <h1>Evolucion anterior</h1>
                            <img src="${ant_pokemon.sprites.other.dream_world.front_default}" alt="">
                        `
                    })
            })


    })