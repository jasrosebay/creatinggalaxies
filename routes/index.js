const express = require('express');
const router = express.Router();

var dateTime = require('node-datetime');
var dt = dateTime.create();
var formattedDT = dt.format('Y-m-d H:M:S');
var formattedDate = dt.format('m-d-Y');
var formattedTime = dt.format('H:M:S');
console.log(formattedDT);
console.log(formattedDate);
console.log(formattedTime);


router.get('/', function(req, res, next) {
  res.render('home');
  console.log("index get");
});

router.get('/about', function(req, res, next) {
  res.render('about');
  console.log("about get");
});


router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
  console.log("portfolio get");
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
  console.log("contact get");
});

router.get('/blog', function(req, res, next) {
  res.render('blog');
  console.log("blog get");
});


// router.get('/index', function(req, res, next) {
//   res.render('index');
//   console.log("index get");
// });

module.exports = router;