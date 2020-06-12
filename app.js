var createError = require('http-errors')
var express = require('express')
var app = express()
 
app.use(function (req, res, next) {
  if (!req.user) return next(createError(401, 'Login Required!!'))
  next()
})

app.listen(8080, (err) => {
    if (err) console.log(err);
    else console.log(`Server Running at http://localhost:8080`)
})