function mensaje_resuelto() {
    console.log("La promesa se cumplio... hurra!")
}

let dinero = 5000

let promesa = new Promise((resolve, reject) => {
    if (dinero == 10000) {
        resolve(mensaje_resuelto())
    } else {
        reject('Ese dinero no esta completo')
    }
})