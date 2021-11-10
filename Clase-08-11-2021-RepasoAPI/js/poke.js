let url_pokemon = "https://pokeapi.co/api/v2/pokemon/pikachu"
let info_api = fetch(url_pokemon)
let info_habilidades = []

info_api.then(respuesta_api => respuesta_api.json())
    .then(poke_info => {
        console.log(poke_info.sprites.other.dream_world.front_default)
        let info = poke_info.sprites.other['official-artwork']
        console.log(info.front_default)
        document.getElementById("imagen1").innerHTML = `
        <img src="${info.front_default}" alt="">
        `
    })


// codigo convirtiendo el json en array
let url_pokemon2 = "https://pokeapi.co/api/v2/pokemon/ditto"
let info_api2 = fetch(url_pokemon2)

info_api2.then(respuesta_api2 => respuesta_api2.json())
    .then(poke_info2 => {
        // console.log(poke_info2.sprites.other.dream_world.front_default)
        let info2 = poke_info2.sprites.other
        let imagen = Object.values(info2)
        imagen = imagen[2]
        document.getElementById("imagen2").innerHTML = `
        <img src="${imagen.front_default}" alt="">
        `
    })