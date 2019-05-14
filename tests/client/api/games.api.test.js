import nock from 'nock'

import { getGamesData } from '../../../client/api/game'

test('getGamesData returns game data', () => {
  const scope = nock('http://localhost:3000')
    .get('/api/game')
    .reply(200)

  getGamesData((err) => {
    expect(err).toBeFalsy()
    scope.done()
  })
})
