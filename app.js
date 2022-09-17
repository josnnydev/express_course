 
const express = require('express');
const cors = require('cors');
const { infoCursos } = require('./datos/cursos.js')


// se crea el servidor
const app = express();
app.use(cors());
const port = process.env.PORT  //process por si se usa un puerto de un hosting

//Routers

const routerProgramacion = require('./routers/programacion')
app.use('/api/cursos/programacion', routerProgramacion)

const routerMatematicas = require('./routers/matematicas')
app.use('/api/cursos/matematicas', routerMatematicas)

//Routing
app.get('/', (req, res) => {
    res.send('mi primer servidor con express')
})

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
})
 
app.listen(port, () => {
    console.log(`servidor escuchando en el puerto: ${port}`)
})
