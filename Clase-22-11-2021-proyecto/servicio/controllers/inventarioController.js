const Producto = require("../models/Producto");



exports.crearProducto = async(req, res) => {
    // console.log('creando el producto... :)')
    // console.log(req.body)

    try {
        let producto
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error, cominiquese con el departamento de sistemas');
    }

}