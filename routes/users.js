var express = require('express');
var router = express.Router();
// var knex = require ('../db/knex')

//Splash page
router.get('/', function(req, res, next) {
  res.render('users/users');
});

//Create new user form
router.get('/new', function(req, res, next){
  res.send("get request new user page")
});

//Post new user to database
router.post('/new', function(req, res, next){
  res.send("post request to new")
});

//Delete user from database
router.post('/:id/delete', function(req, res, next){
  res.send("delete user")
});

//Show single user
router.get('/:id', function(req, res, next){
  res.send("single user show page")
});

//Edit user form
router.get('/:id/edit', function(req, res, next){
  res.send("edit user form")
});

//Update user in database
router.post('/:id/edit', function(req, res, next){
  res.send("update user in database")
});























//
module.exports = router;
