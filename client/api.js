import request from 'superagent'

export const saveGame = (game) => {
  const formData = new FormData()
  formData.append('frame1Img', game.frame1Img)
  return request.post('/testRoute')
    .send(formData)
    .then(res => {
    // eslint-disable-next-line no-console
      console.log(res.body)
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
    })
}

export const getGame = (id) => {
  return request.get(`/testRoute/${id}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
    })
}
