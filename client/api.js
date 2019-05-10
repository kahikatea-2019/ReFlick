import request from 'superagent'

export const saveGame = (blob) => {
  const formData = new FormData()
  formData.append('blob', blob)
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
