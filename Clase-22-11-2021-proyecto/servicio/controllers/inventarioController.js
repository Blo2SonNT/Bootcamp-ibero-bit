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

exports.obtenerProductos = async(req, res) => {
    try {
        let productos = await Producto.find();
        res.json(productos)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error, cominiquese con el departamento de sistemas');
    }
}

exports.obtenerProducto = async(req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "El producto que se esta consultando no existe" })
        }

        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error, cominiquese con el departamento de sistemas');
    }
}

exports.actualizaProducto = async(req, res) => {
    try {
        console.log(req.body)
        const { nombre, fec_vencimiento, precio, cantidad, proveedor } = req.body
        let data_producto = await Producto.findById(req.params.id)

        // console.log(data_producto)

        if (!data_producto) {
            res.status(404).json({ error: "El producto que se esta consultando no existe" })
        }

        data_producto.nombre = nombre;
        data_producto.fec_vencimiento = fec_vencimiento;
        data_producto.precio = precio;
        data_producto.cantidad = cantidad;
        data_producto.proveedor = proveedor;

        data_producto = await Producto.findOneAndUpdate({ _id: req.params.id }, data_producto, { new: true });
        res.json(data_producto)


    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error, cominiquese con el departamento de sistemas');
    }
}

exports.eliminarProducto = async(req, res) => {
    try {
        let data_producto = await Producto.findById(req.params.id);
        if (!data_producto) {
            res.status(404).json({ msg: "El producto que se esta consultando no existe" })
        }

        await Producto.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Producto fue eliminado correctamente' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error, cominiquese con el departamento de sistemas');
    }
}