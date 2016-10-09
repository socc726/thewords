var express = require('express')
  , router = express.Router()
  , Words = require('../models/words')

router.use('/words', require('./words'))

// router.get('/', function(req, res) {
//   Words.all(function(err, words) {
//     res.json(words)
//   })
// })

module.exports = router