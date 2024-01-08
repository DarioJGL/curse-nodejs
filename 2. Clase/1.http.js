const http = require('node:http')
const fs = require('node:fs')
const { findAvailablePort } = require('../1. Clase/10.free-port.js')

const port = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('<h1>Bienvenido a mi página</h1>')
  } else if (req.url === '/hamburguesa') {
    fs.readFile('./2. Clase/1.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/about') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('<h1>Acerca de</h1>')
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

findAvailablePort(port).then(port => {
  server.listen(port, () => {
    console.log(`server is listening on port http://localhost:${port}`)
  })
})
