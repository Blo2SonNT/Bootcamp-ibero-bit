const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    fec_vencimiento: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    proveedor: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Producto', ProductoSchema);