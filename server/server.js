const path = require('path')
const express = require('express')
const formidableMiddleware = require('express-formidable')

const db = require('./db/games')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

const gamesRoute = require('./routes/games')

server.use('/api/v1/games', gamesRoute)
// server.use(express.urlencoded({ extended: true }))
server.use(formidableMiddleware())
server.use(express.static('public'))

// TEST ZONE
server.post('/testRoute', (req, res) => {
  console.log(req.fields)
  console.log(req.files)
  db.submitGame(req.files.blob)
    .then(() => {})
    .catch(err => res.status(500).send(err.message))
})
//

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
