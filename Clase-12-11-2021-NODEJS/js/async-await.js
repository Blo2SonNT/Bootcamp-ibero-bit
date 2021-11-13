async function consumo_api() {
    try {
        let page = "https://pokeapi.co/api/v2/pokemon"
        let pokemones = await fetch(page)
            // console.log(pokemones)
        let data = pokemones.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

let respuesta_llamada = consumo_api()

respuesta_llamada.then(res => {
    console.log(res.results)
})