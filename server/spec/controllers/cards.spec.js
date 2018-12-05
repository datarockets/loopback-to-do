const request = require('request')

const endpoint = 'http://localhost:5000/api/v1/cards'

describe('POST /api/v1/cards', () => {
  it('returns 201 code when card is created', (done) => {
    request({
      url: endpoint,
      method: 'POST',
      json: true,
      body: { description: 'Test' },
    }, (error, response) => {
      expect(response.statusCode).toEqual(201)
      done()
    })
  })

  it("returns 400 code when request doesnt't have description", (done) => {
    request({
      url: endpoint,
      method: 'POST',
      json: true,
      body: { },
    }, (error, response) => {
      expect(response.statusCode).toEqual(400)
      done()
    })
  })
})

describe('GET /api/v1/cards', () => {
  it('returns 200 code when cards are loaded', (done) => {
    request({
      url: endpoint,
      method: 'GET',
      json: true,
    }, (error, response) => {
      expect(response.statusCode).toEqual(200)
      done()
    })
  })
})
