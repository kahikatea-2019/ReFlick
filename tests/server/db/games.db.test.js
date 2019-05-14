const env = require('../../test-environment')
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
      expect(game.id).toBe('1')
    })
})
