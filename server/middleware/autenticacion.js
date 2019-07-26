const jwt = require('jsonwebtoken');

//Verificar token

let verificaToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
};


// Verifica admin role

let verificaAdminRole = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role == 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            message: 'No eres un Admin'
        });
    }


};


module.exports = {
    verificaToken,
    verificaAdminRole
};