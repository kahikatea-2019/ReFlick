const express = require('express')
const router = express.Router()
const db = require('../db/games')

// retrieve saved game
router.post('/', (req, res) => {
  const { frame1Img, frame1Map, frame2Img, frame2Map, frame3Img, frame3Map, frame4Img, frame4Map } = req.body
  db.submitGame(frame1Img, frame1Map, frame2Img, frame2Map, frame3Img, frame3Map, frame4Img, frame4Map)
    .then((game) => res.json(game))
    .catch(err => res.status(500).send(err.message))
})
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getGame(id)
    .then(game => { res.json(game) })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// export saved game to db

module.exports = router
