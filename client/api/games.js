import request from 'superagent'

export function getGameIds () {
  return request
    .get('/api/v1/games')
    .then(res => res.body)
}

export function getGameData (id) {
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
  const { frame1Blob, frame1Map, frame2Blob, frame2Map, frame3Blob, frame3Map, frame4Blob, frame4Map } = game
  const formData = new FormData()
  formData.append('frame1Img', frame1Blob)
  formData.append('frame2Img', frame2Blob)
  formData.append('frame3Img', frame3Blob)
  formData.append('frame4Img', frame4Blob)
  formData.append('frame1Map', JSON.stringify(frame1Map))
  formData.append('frame2Map', JSON.stringify(frame2Map))
  formData.append('frame3Map', JSON.stringify(frame3Map))
  formData.append('frame4Map', JSON.stringify(frame4Map))
  return request
    .post('/api/v1/games')
    .send(formData)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
