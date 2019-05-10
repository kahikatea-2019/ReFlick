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
  const formData = new FormData()
  formData.append('blob', blob)
  return request
    .post('/api/v1/games')
    .send(formData)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

