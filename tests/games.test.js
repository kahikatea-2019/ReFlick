const request = require('supertest')

const server = require('../server/server')
const db = require('../server/db/games')

jest.mock('../server/db/games')

beforeEach(() => {
  db.reset()
  jest.resetModules()
})

test('GET /games returns single game as JSON', () => {
  return request(server)
    .get('/games')
    .then(res => {
      expect(res.type).toBe('application/json')
      expect(res.body).toHaveLength(1)
    })
})

test('/api/v1/:id send back a 200 status', () => {
  request(server)
    .get('/assessments/:id')
    .expect(200)
    .then(res => {
      expect(res.body.frame1Img).toHaveLength()
    })
})

test('POST /games must send to db', () => {
  request(server)
    .get('/assessments/:id')
    .expect(200)
    .then(res => {
      expect(res.body.frame1Img).toHaveLength()
    })
})
