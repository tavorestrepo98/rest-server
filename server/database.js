const mongoose = require('mongoose');

URI = process.env.Mongo_URI;
URI2 = 'mongodb://localhost:27017/cafe'

mongoose.connect(URI2, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(db => console.log('Conectado a la base de Datos'))
    .catch(err => console.log({ err }));

module.exports = mongoose;