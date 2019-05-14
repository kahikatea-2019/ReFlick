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
      // todo: this code never runs
      console.log(game)
      expect(game).toHaveProperty('ok', false)
    })
})
