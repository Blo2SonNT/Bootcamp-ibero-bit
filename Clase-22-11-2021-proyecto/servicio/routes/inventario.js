const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

// router.get('/', (req, res) => {
//     res.send('Hola mundo con express, voy a desarrollar mi API');
// })

// router.post('/', () => {
//     console.log("creando el producto");
// })

router.get('/', inventarioController.obtenerProductos);
router.post('/', inventarioController.crearProducto);
router.get('/:id', inventarioController.obtenerProducto);
router.put('/:id', inventarioController.actualizaProducto);
router.delete('/:id', inventarioController.eliminarProducto);

module.exports = router;