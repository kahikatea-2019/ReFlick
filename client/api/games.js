import request from 'superagent'

export function getGamesData (id) {
  return request
    .get(`/api/v1/games/${id}`)
    .then(res => {
      const game = res.body
      return game
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

export function submitGame (game) {
  request
    .post('/api/v1/games')
    .send(game)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
