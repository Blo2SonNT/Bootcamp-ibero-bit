// function ejercicio2_par_impar(numero_usuario) {
//     console.log(numero_usuario)
// }
function ejercicio2_par_impar() {
    let numero_usuario = document.getElementById('numero_par_impar_usuario').value
    let resultado = ''
    let impresion_pantalla = document.getElementById('resultado_ejercicio_2')
        // impresion_pantalla.style = "color: #000"
    console.log(numero_usuario)
    if (numero_usuario == '') {
        Swal.fire({
            icon: 'error',
            title: 'Bestia!',
            text: 'Coloque un numero!'
        })
        return
    } else if (numero_usuario % 2 >= 1) {
        console.log("El numero es impar")
        resultado = "impar"
    } else {
        console.log("El numero es par")
        resultado = "par"
    }
    impresion_pantalla.innerHTML = `El numero es ${resultado}`
    Swal.fire({
        title: `El numero es ${resultado}`,
        width: 600,
        padding: '3em',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
        `
    })
}

function ejercicio3_pizzas() {
    let edad_usuario = document.querySelector("#edad_usuario_pizza").value
    let genero_usuario = document.querySelector('#genero_usuario_pizza').value
    let premios = ''
    let felicitacion = false
    let img_alerta = ''

    if (edad_usuario < 10) {
        felicitacion = true
        img_alerta = 'https://sweetalert2.github.io/images/nyan-cat.gif'
        premios += 'un jugo'
    } else if (edad_usuario >= 18) {
        felicitacion = true
        img_alerta = 'https://sweetalert2.github.io/images/nyan-cat.gif'
        premios += 'una cerveza'
        switch (genero_usuario) {
            case "hombre":
                premios += " y una pizza tres carnes"
                break
            case "mujer":
                premios += " y una pizza hawaiana"
                break
        }
    } else {
        img_alerta = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/SMirC-sad.svg/2048px-SMirC-sad.svg.png"
        premios = 'No tiene derecho a ningun premio'
    }

    premios = (felicitacion) ? `Puedes reclamar ${premios}` : premios
    felicitacion = (felicitacion) ? 'Felicidades!!' : 'Sera para la proxima! :('

    Swal.fire({
        title: felicitacion,
        text: premios,
        imageUrl: img_alerta,
        imageWidth: '50%',
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
    console.log(premios)
}

function ejercicio4_menu_restaurante(finaliza_orden) {
    var orden_pedido = document.getElementById('deseo-usuario-menu').value
    orden_pedido = orden_pedido.toLowerCase()
    console.log(orden_pedido)
    let valor = 0
    let error_pedido = false
    if (!finaliza_orden) {
        console.log("Agregando orden al pedido")
        switch (orden_pedido) {
            case "pasta":
                valor = 7000
                break
            case "hamburguesa":
                valor = 12000
                break
            case "pizza":
                valor = 5200
                break
            case "malteada":
                valor = 3500
                break
            default:
                valor = 0
                error_pedido = true
                break
        }

        if (localStorage.getItem('cuenta_usuario') == null) {
            localStorage.setItem('cuenta_usuario', valor)
        } else {
            valor = parseInt(localStorage.getItem('cuenta_usuario')) + valor
            localStorage.setItem('cuenta_usuario', valor)
        }

        if (error_pedido) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ese plato no esta en nuestra carta'
            })
        }

    } else {
        console.log("finalizo la orden")
        document.querySelector("#total_cuenta_ejemplo_1").innerHTML = `El total es: ${localStorage.getItem('cuenta_usuario')}`
        localStorage.removeItem('cuenta_usuario')
    }
}