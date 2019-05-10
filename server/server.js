const path = require('path')
const express = require('express')
const formidableMiddleware = require('express-formidable')

const fs = require('fs')

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
  fs.readFile(req.files.frame1Img.path, (err, data) => {
    if (err) { console.log(err) }
    console.log('data', data)
    db.submitGame(data)
    .then(() => {res.send('ok')})
    .catch(err => res.status(500).send(err.message))
  })
})

server.get('/testRoute/:id', (req, res) => {
  const id = req.params.id
  db.getGame(id)
    .then((game) => {
      res.send(game)
    })
    .catch(err => res.status(500).send(err.message))
})
//

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
