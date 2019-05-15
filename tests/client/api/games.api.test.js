import { getGameData } from '../../../client/api/games'

var request = require('superagent')
var mock = require('superagent-mocker')(request)

test('getGameData returns game data', () => {
  mock.get(`/api/v1/games/1`, function (req) {
    return {
      ok: true
    }
  })

  getGameData(1)
    .then((game) => {
      // tested api route with nock, nocker, superagent-mocker
      // issue with testing with superagent
      console.log(game)
      expect(game).toHaveProperty('ok', false)
    })
})
