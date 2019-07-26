require('./config/config');
require('./database');

const express = require('express');
const app = express();
const morgan = require('morgan');


const port = process.env.PORT;


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


//Configuracion global de routas
app.use(require('./routes/index'));


app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});