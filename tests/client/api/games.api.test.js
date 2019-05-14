import nock from 'nock'

import { getGameData } from '../../../client/api/games'

test('getGameData returns game data', () => {
  const scope = nock('http://localhost:3000')
    .get(`/api/v1/games/1`)
    .reply(200)

  getGameData((err) => {
    expect(err).toBeFalsy()
    scope.done()
  })
})
