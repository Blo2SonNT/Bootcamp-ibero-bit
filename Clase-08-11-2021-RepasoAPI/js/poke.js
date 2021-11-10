let url_pokemon = "https://pokeapi.co/api/v2/pokemon/pikachu"
let info_api = fetch(url_pokemon)
let info_habilidades = []

info_api.then(respuesta_api => respuesta_api.json())
    .then(poke_info => {
        console.log(poke_info.sprites.other.dream_world.front_default)
        let info = poke_info.sprites.other['official-artwork']
        console.log(info.front_default)
            // let imagen = Object.values(info)
            // console.log(imagen[2])
        document.getElementById("imagen").innerHTML = `
        <img src="${info.front_default}" alt="">
        `
    })