var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: req.session.name });
});

router.get('/value', function(req, res, next) {
  res.render('value' , {value : req.query.value});
});

router.get('/login', function(req, res, next) {
  res.render("login"); 
});

router.post('/login', function(req , res ,next) {
  req.session.name = req.body.name;
  res.redirect('/');
})

module.exports = router;
