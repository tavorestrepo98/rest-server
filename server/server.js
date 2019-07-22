require('./config/config');

const express = require('express');
const app = express();

const port = process.env.PORT;


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/usuario', (req, res) => {
    res.json({
        menssage: 'get usuario'
    });
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre == undefined) {
        res.status(400).json({
            ok: false,
            menssage: "Nombre es necesario"
        });
    } else {
        res.json({ persona: body });
    }
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json({
        menssage: 'delete usuario'
    });
});

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});