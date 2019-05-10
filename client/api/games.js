import request from 'superagent'

const gameUrl = '/api/v1/games'

export function getGamesData () {
  return request
    .get(gameUrl)
    .then(res => {
      console.log(res)
    })
}
