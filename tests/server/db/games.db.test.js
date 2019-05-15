const env = require('./test-environment')
const db = require('../../../server/db/games')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getGame returns an individual game from the database', () => {
  return db.getGame(1, testDb)
    .then(game => {
      expect(game.id).toBe(1)
    })
})

test('getGameIds returns an array of all ids in database', () => {
  return db.getGameIds(testDb)
    .then(games => {
      expect(games.length).toBe(2)
    })
})

test('submitGame saves a game to the db', () => {
  return db.submitGame('frame1Img', 'frame1Map', 'frame2Img', 'frame2Map', 'frame3Img', 'frame3Map', 'frame4Img', 'frame4Map', testDb)
    .then(([id]) => {
      expect(id).toBe(3)
    })
})
