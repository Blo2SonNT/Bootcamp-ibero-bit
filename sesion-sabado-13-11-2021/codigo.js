// function nombre_cualquiera(parametros, parametro2, parametro3, parametro4){
//     if(parametro2 == "algo"){
//         //instrucciones
//     }
// }


function etnia_persona(persona) {
    if (persona == "blanca" || persona == "rosada") {
        console.log("Sin multas")
    } else if (persona == "afro" || persona == "asiatica") {
        localStorage.setItem("multa", "['fulano', 20000, '1900-05-20']")
        return "Tiene multa"
    } else {
        console.log("salga corriendo")
    }
}

etnia_persona2 = (persona) => {
    switch (persona) {
        case "blanca":
            console.log("sin multa")
            break
        case "afro":
            console.log("tenga su multa")
            break
        default:
            console.log("Es alguien de otro planeta")
    }
}



function consolidado_multas() {

    console.log(localStorage.getItem("multa"))

}


function borrar_multas(da_alerta) {
    localStorage.removeItem("multa")
    if (da_alerta == true) {
        alert("se borraron las multas")
    } else {
        console.log("Se borraron las multas")
    }

}



// let multa = ['fulano', 20000, '1900-05-20']

// multa.forEach(data_multa => {
//     console.log(data_multa)
// });

// let forms = [{
//     "name": "ditto",
//     "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
// }]

// forms.forEach(data_forms => {
//     console.log(data_forms)
// });

// for (const data_forms of forms) {
//     console.log(data_forms.name)
// }


class Casco {
    material = ''
    estadisticas = ''
    ventaja = ''
    color = ''

    constructor(material_usuario, estadisticas, ventaja) {
        this.estadisticas = estadisticas
        this.material = material_usuario
        this.ventaja = ventaja
    }

    craftear() {
        switch (this.material) {
            case "metal":
                this.color = "gris"
                break
            case "cuero":
                this.color = "cafe"
                break
            default:
                this.color = null
        }
        return this.color
    }

}

const casco_juego = new Casco("cuero", "peso: 3 kilos", "salta mas alto")
console.log(casco_juego.craftear())