const http = require('http')
const port = 3000

const server = http.createServer((req,res)=>{
  console.log('===> req (solicitud)')
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)

  res.end('hola.. Josnny')
})

server.listen(port,()=>{
    console.log(`Escuchando en el puerto: ${port}`)

})