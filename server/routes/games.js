const express = require('express')
const router = express.Router()
const db = require('../db/games')

// retrieve saved game

router.get('/api/v1/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getGame(id)
    .then(game => {res.json(game)})
    .catch(err => {res.status(500).send(err.message)
    })
})

// export saved game to db

router.post('/api/v1/games', (req, res) => {
  const { frame1Img, frame1Map, frame2Img, frame2Map, frame3Img, frame3Map, frame4Img, frame4Map } = req.body
  db.submitGame(frame1Img, frame1Map, frame2Img, frame2Map, frame3Img, frame3Map, frame4Img, frame4Map)
    .then(() => res.send('/game'))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
