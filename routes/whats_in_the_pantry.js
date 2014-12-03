var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('whats_in_the_pantry/component');
});

module.exports = router;
