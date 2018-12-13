module.exports = (router) => {
  router
    .post('/cards/:id/completion', (req, res) => {
    	res.send('hello');
    })
}
