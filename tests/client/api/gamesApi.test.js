import { getGamesData } from '../../../client/api/games'
import nock from 'nock'

test('getGamesData returns game data', () => {
  const scope = nock('http://localhost:3000')
    .get('/api/v1/game')
    .reply(200)

  getGamesData((err) => {
    expect(err).toBeFalsy()
    scope.done()
  })
})
