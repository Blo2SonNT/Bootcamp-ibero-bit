// function prueba() {
//     console.log("Este es un mensaje de prueba")
// }

// prueba()

function mensaje() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('Esto se ejecutara despues de recibir la respuesta de la API')
            } else {
                reject('Hubo un error')
            }
        }, 4000)
    })


}

async function llamadaAPI() {
    console.log("Llamando la API...")

    let respuesta = await mensaje()
    console.log("Esto depende del llamado de la api")
    return respuesta
}

llamadaAPI().then(x => { console.log(x) }).catch(error => { console.log(error) })
console.log("Este mensaje aparecera de primeras pero ya se hizo el llamado de la api")