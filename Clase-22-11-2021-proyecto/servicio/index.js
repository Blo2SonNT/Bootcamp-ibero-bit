// console.log("ejecutando el proyecto")

const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

conectarDB();
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hola mundo con express, voy a desarrollar mi API');
// })

app.use('/api/inventario_pepe', require('./routes/inventario'));

app.listen(3001, () => {
    console.log('Proyecto back, ejecutandose en el puerto 3001');
});