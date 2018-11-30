module.exports = function(api){
  api.post('/cards', (req, res) => {
    res.send('test2')
  })
}
