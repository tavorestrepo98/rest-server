require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');

const port = process.env.PORT;


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

//Rutas
app.use('/usuario', require('./routes/usuarios.routes'));

URI = 'mongodb://localhost:27017/cafe'

mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(db => console.log('Conectado a la base de Datos'))
    .catch(err => console.log({ err }))


app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});