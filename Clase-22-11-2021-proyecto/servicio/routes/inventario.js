const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola mundo con express, voy a desarrollar mi API');
})

router.post('/', () => {
    console.log("creando el producto");
})

module.exports = router;