const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

// router.get('/', (req, res) => {
//     res.send('Hola mundo con express, voy a desarrollar mi API');
// })

// router.post('/', () => {
//     console.log("creando el producto");
// })

// router.get('/', inventarioController.crearProducto);
router.post('/', inventarioController.crearProducto);

module.exports = router;