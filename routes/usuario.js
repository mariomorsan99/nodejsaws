var express = require('express');
var app = express();
//Rutas
app.get('/', (request, resp, next) => {
    resp.status(200).json({
        mensaje: 'peticion correcta',
        ok: true,
        usuario: 'usuario de aws '
    });
});

module.exports = app;