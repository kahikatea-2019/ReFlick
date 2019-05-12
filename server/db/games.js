const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getGame,
  submitGame
}

// retrieve saved game so that user can play

function getGame (id, db = connection) {
  return db('games')
    .where({ id: id })
    .select()
    .first()
}

// export button to submit to db once user has built game

function submitGame (frame1Img, frame1Map, frame2Img, frame2Map, frame3Img, frame3Map, frame4Img, frame4Map, db = connection) {
  return db('games')
    .insert({ frame1Img, frame1Map, frame2Img, frame2Map, frame3Img, frame3Map, frame4Img, frame4Map })
}
