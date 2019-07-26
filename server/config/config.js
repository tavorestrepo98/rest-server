//Puerto
process.env.PORT = process.env.PORT || 3000;

//vencimiento del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//SEED de autenticacion
process.env.SEED_TOKEN = process.env.SEED_TOKEN || 'secret';