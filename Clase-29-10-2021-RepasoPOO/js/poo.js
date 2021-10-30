let container_calc = document.querySelector("#vista-botones")
let btns_calc = ''
for (let btn = 1; btn <= 16; btn++) {
    if (btn <= 9) {
        btns_calc += `
        <div class="col-4 py-4 d-flex justify-content-center align-items-center">
            <button class="btn btn-dark w-100" onclick="guardar_numero(${btn})">${btn}</button>
        </div>
        `
    }
    if (btn == 10) {
        btns_calc += `
        <div class="col-6 py-4 d-flex justify-content-center align-items-center">
            <button class="btn btn-dark w-100" onclick="guardar_numero(0)">0</button>
        </div>
        `
    }
    switch (btn) {
        case 11:
            btns_calc += `
            <div class="col-1 py-4 d-flex justify-content-center align-items-center">
                <button class="btn btn-dark w-100" onclick="guardar_numero('', true)">=</button>
            </div>
            `
            break;
        case 12:
            btns_calc += `
            <div class="col-1 py-4 d-flex justify-content-center align-items-center">
                <button class="btn btn-dark w-100" onclick="guardar_numero('suma', true)">+</button>
            </div>
            `
            break;
        case 13:
            btns_calc += `
            <div class="col-1 py-4 d-flex justify-content-center align-items-center">
                <button class="btn btn-dark w-100" onclick="guardar_numero('resta', true)">-</button>
            </div>
            `
            break;
        case 14:
            btns_calc += `
            <div class="col-1 py-4 d-flex justify-content-center align-items-center">
                <button class="btn btn-dark w-100" onclick="guardar_numero('multiplicacion', true)">x</button>
            </div>
            `
            break;
        case 15:
            btns_calc += `
            <div class="col-1 py-4 d-flex justify-content-center align-items-center">
                <button class="btn btn-dark w-100" onclick="guardar_numero('division', true)">/</button>
            </div>
            `
            break;
        case 16:
            btns_calc += `
                <div class="col-1 py-4 d-flex justify-content-center align-items-center">
                    <button class="btn btn-dark w-100" onclick="document.querySelector('#pantalla_calculadora').value = ''">CE</button>
                </div>
                `
            break;
    }
}
container_calc.innerHTML = btns_calc



class calculadora_operaciones {

    numero1 = 0
    numero2 = 0
    resultado = 0

    constructor(num1, num2) {
        this.numero1 = num1
        this.numero2 = num2
    }

    suma() {
        this.resultado = parseInt(this.numero1) + parseInt(this.numero2)
        return this.resultado
    }

    resta() {
        this.resultado = parseInt(this.numero1) - parseInt(this.numero2)
        return this.resultado
    }

    multiplicacion() {
        this.resultado = parseInt(this.numero1) * parseInt(this.numero2)
        return this.resultado
    }

    division() {
        this.resultado = parseInt(this.numero1) / parseInt(this.numero2)
        return this.resultado
    }


}

// let operando = new calculadora_operaciones(5, 2)
// console.log(operando.suma())
// console.log(operando.resta())
// console.log(operando.multiplicacion())
// console.log(operando.division())

function guardar_numero(numero_boton, accion_localstorage = false) {
    var input_calculadora = document.querySelector("#pantalla_calculadora")
    if (!accion_localstorage) {
        input_calculadora.value += numero_boton
    } else {
        if (localStorage.getItem("primer_valor_declarado") == null) {
            // localStorage.clear()
            localStorage.setItem("numero1", input_calculadora.value)
            localStorage.setItem("operacion", numero_boton)
            input_calculadora.value = ''
            localStorage.setItem("primer_valor_declarado", true)
        } else {
            resultado(input_calculadora.value)
        }
    }
}

function resultado(numero_siguiente) {
    console.log(numero_siguiente)
    var input_calculadora = document.querySelector("#pantalla_calculadora")
    let num1 = localStorage.getItem("numero1")
    let operacion = localStorage.getItem("operacion")
    console.log(operacion)

    let operando = new calculadora_operaciones(num1, numero_siguiente)

    switch (operacion) {
        case "suma":
            input_calculadora.value = operando.suma()
            localStorage.clear()
            break
        case "resta":
            input_calculadora.value = operando.resta()
            localStorage.clear()
            break
        case "multiplicacion":
            input_calculadora.value = operando.multiplicacion()
            localStorage.clear()
            break
        case "division":
            input_calculadora.value = operando.division()
            localStorage.clear()
            break
    }
}