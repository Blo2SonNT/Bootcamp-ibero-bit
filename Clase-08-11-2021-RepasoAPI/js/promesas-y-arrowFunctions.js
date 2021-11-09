prueba_promesa = () => {
    console.log("Se cumplio la promesa")
}
let texto_promesa = "le cumplo el martes"
const promesa = new Promise((resolve, reject) => {
    if (texto_promesa == "le cumplo el lunes") {
        resolve(prueba_promesa())
    } else {
        reject('La promesa no se cumplio')
    }
})


function contacto() {
    let ejemplo = 'hola'
    let div_contenido = document.getElementById("texto")
    div_contenido.innerHTML += `${ejemplo} como estas`
}

contacto()

contacto2 = () => {
    let ejemplo = 'hola'
    let div_contenido = document.querySelector("#texto")
    div_contenido.innerHTML += `${ejemplo} como estas`
}

contacto2()