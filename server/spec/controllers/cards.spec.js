const request = require('request')

describe('Post request /api/v1/cards', () => {
  const baseUrl = 'http://localhost:5000/api/v1/cards'

  it('returns 201 code when card is created', (done) => {
    request({
      url: baseUrl,
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
      url: baseUrl,
      method: 'POST',
      json: true,
      body: { },
    }, (error, response) => {
      expect(response.statusCode).toEqual(400)
      done()
    })
  })
})
