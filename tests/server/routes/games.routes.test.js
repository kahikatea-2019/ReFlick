const request = require('supertest')

const server = require('../../../server/server')
const db = require('../../../server/db/games')

jest.mock('../../../server/db/games')

// needs mock config to be checked

// test('GET /api/v1/games returns ids', () => {
//   return request(server)
//     .get('/api/v1/games')
//     .then(res => {
//       expect(res.type).toBe('text/html')
//       expect(res.body).toHaveLength()
//     })
// })

test('/api/v1/games/:id sends back a 200 status', () => {
  request(server)
    .get('/api/v1/games/1')
    .expect(200)
    .then(res => {
      console.log(res)
      expect(res.body.frame1Img).toHaveLength()
    })
})

// test('/games must send to db', () => {
//   request(server)
//     .get('/assessments/:id')
//     .expect(200)
//     .then(res => {
//       expect(res.body.frame1Img).toHaveLength()
//     })
// })

// test('/games/:id sends back a 200 status', () => {
//   request(server)
//     .get('/assessments/:id')
//     .expect(200)
//     .then(res => {
//       expect(res.body.name).toHaveLength()
//     })
// })
