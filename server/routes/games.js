const express = require('express')
const router = express.Router()
const formidableMiddleware = require('express-formidable')

const fs = require('fs')

const db = require('../db/games')

router.use(formidableMiddleware())

// Save game to db
router.post('/', (req, res) => {
  // Using formidable so structure of req is different now
  console.log(req.fields)
  console.log(req.files)
  const { frame1Map } = req.fields
  fs.readFile(req.files.frame1Img.path, (err, frame1Img) => {
    if (err) {
      console.log(err)
    }
    db.submitGame(frame1Img, frame1Map)
      .then(() => { res.send('ok') })
      .catch(err => res.status(500).send(err.message))
  })
})

// Get game from db
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getGame(id)
    .then(game => {
      res.send(game)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
