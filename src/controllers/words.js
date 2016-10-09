var express = require('express')
  , router = express.Router()

var Words = require('../models/words')

// Submit a word
router.post('/submit', function(req, res) {
  Words.submit({}, req.body.word, function(err, doc) {
    res.redirect('/all')
  })
})

// Get all Words
router.get('/all', function(req, res) {
  Words.all(function(err, docs) {
    res.json(docs)
  })
})

// Get most recent Words
router.get('/recent', function(req, res) {
  Words.recent(function(err, docs) {
    res.json({words: docs})
  })
})

module.exports = router