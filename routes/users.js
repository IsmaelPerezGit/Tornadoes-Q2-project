var express = require('express');
var router = express.Router();
var knex = require ('../db/knex')
var bcrypt = require ('bcrypt')

//Splash page
router.get('/', function(req, res, next) {
  res.render('users/users');
});

//Create new user form
router.get('/new', function(req, res, next){
  res.render('users/new')
});

//Post new user to database
router.post('/new', function(req, res, next){
  if (req.body.password === req.body.confirm) {
    bcrypt.hash(req.body.password, 8, function(err, hash) {
    knex.raw(`insert into users (username, password) values ('${req.body.username}', '${hash}')`)
      .then(function(){
        res.redirect('/login')
      })
    });
  } else {
    res.send("Passwords do not match")
  };
});

//Delete user from database
router.post('/:id/delete', function(req, res, next){
    knex.raw(`delete from users where users.id = ${req.params.id}`)
    .then(function(){
      res.redirect('/')
    });
});

//Get login form
router.get('/login', function(req, res, next){
  res.render('users/login')
});

//Post login
router.post('/login', function (req,res, next) {
  knex.raw(`select * from users where username = '${req.body.username}'`)
  .then(function (user) {
    var userID = user.rows[0].id
    bcrypt.compare(req.body.password, user.rows[0].password, function (err, resp) {
      if (resp) {
        res.redirect(`/users/${userID}`)
      } else {
        res.send("Login failed!")
      }
    })
  })
});


//Show single user
router.get('/:id', function(req, res, next){
  res.send("single user show page")
});


//Edit user form
router.get('/:id/edit', function(req, res, next){
    knex.raw(`select * from users where users.id = ${req.params.id}`)
      .then(function(data){
        res.render('users/edit', {data: data.rows[0]})
    });
});

//Update user in database
router.post('/:id/edit', function(req, res, next){
  knex.raw(`update users set username = '${req.body.name}', password = '${req.body.password}' where users.id = ${req.params.id}`)
  .then(function(){
    res.redirect(`/users/${req.params.id}`)
  });
});























//
module.exports = router;
