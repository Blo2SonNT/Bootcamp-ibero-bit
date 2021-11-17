const fs = require('fs');

let info_documento = 'Lorem ipsum dolor sit amet \nconsectetur adipisicing elit. Dolorem, doloribus iusto animi inventore excepturi consequatur laborum officia eveniet suscipit natus, deleniti quibusdam tempora dignissimos? Fugit assumenda voluptates facere asperiores culpa.'
fs.writeFile('./prueba_codigo.txt', info_documento, error => {
    if (error) {
        console.log(error)
    } else {
        console.log('El archivo fue creado')
    }
})