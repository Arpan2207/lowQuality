var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.title = "CSC 317 app"
  res.locals.name = "Arpan R Savani" 
  res.render("index",{title:"Home", css: ["index.css"], js: ["index.js"]});
});


router.get('/login', function(req, res, next) {
  res.render('login', {title:"Login", css: ["login.css"]}) 
}); 

router.get('/postvideo', function(req, res, next) {
  res.render('postvideo', {title:"Postvideo", css: ["postvideo.css"]}) 
}); 

router.get('/register', function(req, res, next) {
  res.render('register', {title:"Register", css: ["register.css"], js: ["register.js"]}) 
}); 

router.get('/viewpost', function(req, res, next) {
  res.render('viewpost', {title:"Viewpost", css: ["viewpost.css"]}) 
}); 

module.exports = router;
