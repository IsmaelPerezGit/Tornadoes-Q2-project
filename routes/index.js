var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users');
});

router.get("/nouserDraw", function(req, res){
  res.render('nonuserDraw.jade');
})

module.exports = router;
