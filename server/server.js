require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();


const port = process.env.PORT;


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Rutas
app.use('/usuario', require('./routes/usuarios.routes'));


URI = process.env.Mongo_URI;

mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(db => console.log('Conectado a la base de Datos'))
    .catch(err => console.log({ err }))


app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});