// let persona = ["julian", 25, true, ["asda"]]

// let persona = {
//     nombre: "miguel",
//     edad: 25,
//     correo: "correo@correo.com",
//     tiene_hijos: true,
//     hijos: {
//         nombre: "junior",
//         edad: 10,
//         comidas_favoritas: ["pizza", "brocoli", "pasta"]
//     }
// }


// console.log(persona)

// console.log(Object.values(persona))

// input = document.getElementById('ejemplo').value



class Saludo {

    nombre_saludo
    edad_saludo = 0

    constructor(nombre, edad) {
        this.nombre_saludo = nombre;
        this.edad_saludo = edad;
    }

    saludo_persona() {
        return `Hola ${this.nombre_saludo}`
    }

    chao_persona() {
        return `Adios ${this.nombre_saludo}`
    }

    edad_persona() {
        return `La edad de la persona es ${this.edad_saludo}`
    }


}

let edad = 40

let saludando = new Saludo("Juan", edad)
console.log(saludando.edad_persona() + " " + saludando.chao_persona())


class saludoComplejo extends Saludo {

    profesion_saludo = ''

    constructor(nombre, edad, profesion) {
        super(nombre, edad)
        this.profesion_saludo = profesion
    }

    saludo_desarrollador() {
        if (this.profesion_saludo == "desarrollador") {
            return `Estoy aprendiendo a programar`
        } else {
            return `chuste de aqui`
        }
    }


}

let saludoProfesor = new saludoComplejo("fulano", 40, "quimico")
console.log(saludoProfesor.saludo_persona())

console.log(saludoProfesor.saludo_desarrollador())