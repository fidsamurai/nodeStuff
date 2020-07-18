

module.exports = function(app) {

  app.get('/api/test', function (req,res) {
    res.send('Successful')
  })

  app.get('/api/home', function (req,res) {
    res.render('index')
  })



}
