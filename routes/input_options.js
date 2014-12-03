//input_options
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('input_options/component');
});

module.exports = router;
