const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DATA_BASE_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false - true
        });
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        //configurcion para interrumpir el servicio
        process.exit(1);
    }
}

module.exports = conectarDB;