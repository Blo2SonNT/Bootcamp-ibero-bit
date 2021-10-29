let productosTienda = [{
        nombre: "chocorramo",
        categoria: "ponque",
        precio: 1000,
        proveedor: "Ramo",
        imagen: "https://www.larebajavirtual.com/images/productos/sii/F/300x300/chocoramo-26375-1563547527.png"
    },
    {
        nombre: "coca cola",
        categoria: "gaseosa",
        precio: 4500,
        proveedor: "Cocacola company",
        imagen: "https://s1.eestatic.com/2017/06/28/cocinillas/cocinillas_227241432_116356253_1706x960.jpg"
    },
    {
        nombre: "gelatina",
        categoria: "postre",
        precio: 700,
        proveedor: "pepito gelatina",
        imagen: "https://saborgourmet.com//wp-content/uploads/como-hacer-gelatina.jpg"
    },
    {
        nombre: "perro caliente",
        categoria: "comida rapida",
        precio: 5000,
        proveedor: "perritos luna",
        imagen: "https://lh3.googleusercontent.com/proxy/2NyAcLs4F9NZThfIirIjBeRSPZPikVsE59WK7pB2d2FqCE-UNi7IctO8YFxgLbdQe7zYJMC_HuA5Dk-IVRPO0XsHtrRtzSinPF3OIiDBacE65B1HUJ1ZXLSg83i4FErPrvXqTKY03E4"
    },
    {
        nombre: "colombiana",
        categoria: "gaseosa",
        precio: 3200,
        proveedor: "Postobon",
        imagen: "https://mercaldas.vteximg.com.br/arquivos/ids/184332-1300-1300/Gaseosa-POSTOBON-Colombiana-Botella-X15Lts.jpg?v=637012447025500000"
    },
    {
        nombre: "Trident",
        categoria: "Confiteria",
        precio: 100,
        proveedor: "colombina",
        imagen: "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3650357-750-750/7506105606077.jpg?v=637401998463170000"
    },
    {
        nombre: "Club colombia",
        categoria: "Cerveza",
        precio: 3000,
        proveedor: "Bavaria",
        imagen: "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3721413-1000-1000/7702004003539.jpg?v=637578058575900000"
    }
]

let contenedor_productos = document.getElementById("mis_productos")
for (const iteracion of productosTienda) {
    contenedor_productos.innerHTML += `

    <div class="col">
    <div class="card">
    <img src="${iteracion.imagen}" class="card-img-top w-100 img-producto" alt="...">
      <div class="card-body d-flex justify-content-center align-items-center flex-column">
        <h5 class="card-title">${iteracion.nombre}</h5>
        <p class="fw-bold card-text">${iteracion.proveedor}</p>
        <button type="button" class="btn btn-dark" onclick="">Agregar al carrito</button>
      </div>
    </div>
  </div>
    
        
    `
}

/* 
<div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>


*/

class CarritoCompras {
    constructor() {
        this.productos = []
    }

    nuevo_producto(producto_nuevo) {
        this.productos.push(producto_nuevo)
        return this.productos
    }

    precio_total() {
        let total_cuenta = 0
        let lista_precio = ''
        this.productos.forEach(function(data_producto) {
            // lista_precio += data_producto.precio + " - "
            total_cuenta = parseInt(total_cuenta) + parseInt(data_producto.precio)
        });
        return total_cuenta
    }

}
let compras = new CarritoCompras()

let producto1 = {
    nombre: "chocorramo",
    categoria: "ponque",
    precio: 1000,
    proveedor: "Ramo"
}
let producto2 = {
    nombre: "coca cola",
    categoria: "gaseosa",
    precio: 4500,
    proveedor: "Cocacola company"
}
let producto3 = {
    nombre: "gelatina",
    categoria: "postre",
    precio: 700,
    proveedor: "pepito gelatina"
}

compras.nuevo_producto(producto1)
compras.nuevo_producto(producto2)
compras.nuevo_producto(producto3)
console.log(compras.precio_total())
    /*
        {
            nombre: "chocorramo", 
            categoria: "ponque", 
            precio: 1000, 
            proveedor: "Ramo"
        }
    */