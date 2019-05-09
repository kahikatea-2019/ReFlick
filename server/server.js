const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

const gamesRoute = require('./routes/games')

server.use('/api/v1/games', gamesRoute)
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))


server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})


module.exports = server

