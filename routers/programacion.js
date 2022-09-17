const express = require('express');
const routerProgramacion = express.Router();
const {programacion} = require('../datos/cursos').infoCursos

routerProgramacion.get( '/', (req, res) => {
    res.send(JSON.stringify(programacion))
})


routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {

    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    if (resultado.length === 0) {
        return res.status(404).send(`no se encontraron cursos de: ${lenguaje}`)
    }
    //query
    if (req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultado.sort((minor, higher) => minor.vistas - higher.vistas)))
    }
    res.send(JSON.stringify(resultado))
})


module.exports  = routerProgramacion;