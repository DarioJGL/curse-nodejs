const express = require('express')
const dittoJSON = require('./pokemon/ditto.json')

const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000

app.use((req, res, next) => {
  if (req.method === 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''
  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.body = data
    next()
  })
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(res.body)
})

app.use((req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(PORT, () => {
  console.log(`server is listening on port http://localhost:${PORT}`)
})
