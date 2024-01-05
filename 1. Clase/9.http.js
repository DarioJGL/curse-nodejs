const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const port = process.env.PORT ?? 3000
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello World')
})

findAvailablePort(port).then(port => {
  server.listen(port, () => {
    console.log(`server is listening on port http://localhost:${port}`)
  })
})
