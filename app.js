const express = require('express');
const { infoCursos } = require('./cursos.js')
const PORT = 3000 || Process.env.PORT //process por si se usa un puerto de un hosting
// se crea el servidor
const app = express();

//Routing
app.get('/', (req, res) => {
    res.send('mi primer servidor con express')
})

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
})

//CURSOS PROGRAMACION

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion[0]))
})


app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {

    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel
    const resultado = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    if (resultado.length === 0) {
        return res.status(404).send(`no se encontraron cursos de: ${lenguaje}`)
    }


    res.send(JSON.stringify(resultado))
})

//CURSOS MATEMATICAS

app.get('/api/cursos/matematicas', (req, res) => {

    res.send(JSON.stringify(infoCursos.matematicas))
})

app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema
    const resultado = infoCursos.matematicas.filter(curso => curso.tema === tema)

    if (resultado.length === 0) {
        return res.status(404).send(`no se encontraron temas de: ${tema} `)
    }

    res.send(JSON.stringify(resultado))
})



app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto: ${PORT}`)
})
