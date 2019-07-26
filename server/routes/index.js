const express = require('express');
const app = express();


// Routes
app.use('/usuario', require('./usuarios.routes'));
app.use('/login', require('./login.routes'));


module.exports = app;