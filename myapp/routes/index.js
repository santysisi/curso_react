var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hola', function(req, res, next) {
  res.json("hola")
});

router.get('/chau', function(req, res, next) {
  res.json("chau")
});

module.exports = router;
