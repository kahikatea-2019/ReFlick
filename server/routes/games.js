const express = require('express')
const router = express.Router()
const formidableMiddleware = require('express-formidable')

const fs = require('fs')

const db = require('../db/games')

router.use(formidableMiddleware())

router.get('/', (req, res) => {
  db.getGameIds()
    .then(id => res.send(id))
    .catch(err => res.status(500).send(err.message))
})
// Save game to db
router.post('/', (req, res) => {
  // Using formidable so structure of req is different now
  // console.log(req.fields)
  // console.log(req.files)
  const { frame1Map, frame2Map, frame3Map, frame4Map } = req.fields
  const frame1Img = fs.readFileSync(req.files.frame1Img.path)
  const frame2Img = fs.readFileSync(req.files.frame2Img.path)
  const frame3Img = fs.readFileSync(req.files.frame3Img.path)
  const frame4Img = fs.readFileSync(req.files.frame4Img.path)
  db.submitGame(frame1Img, frame1Map, frame2Img, frame2Map, frame3Img, frame3Map, frame4Img, frame4Map)
    .then(() => { res.send('ok') })
    .catch(err => console.log(err))
})

// Get game from db
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getGame(id)
    .then(game => {
      res.send(game)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
