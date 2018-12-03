describe("Post request /api/v1/cards", () => {
  const request = require("request")
  const base_url = "http://localhost:5000/api/v1/cards"

  it("returns 201 code when card is created", (done) => {
    request({
      url: base_url,
      method: "POST",
      json: true,
      body: { description: "Test"},
    }, (error, response, body) => {
      expect(response.statusCode).toEqual(201)
      done()
    });
  });

  it("returns 400 code when request doesnt't have description", (done) => {
    request({
      url: base_url,
      method: "POST",
      json: true,
      body: { },
    }, (error, response, body) => {
      expect(response.statusCode).toEqual(400)
      done()
    });
  });
});
