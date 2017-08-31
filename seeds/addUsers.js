var bcrypt = require('bcrypt');
const saltRounds = 7;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'test', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'reese', password: `${bcrypt.hashSync('reese', saltRounds)}`, isAdmin: false},
        {username: 'kyle', password: `${bcrypt.hashSync('kyle', saltRounds)}`, isAdmin: false},
        {username: 'thomas', password: `${bcrypt.hashSync('thomas', saltRounds)}`, isAdmin: false},
        {username: 'johnny', password: `${bcrypt.hashSync('johnny', saltRounds)}`, isAdmin: false},
        {username: 'ismael', password: `${bcrypt.hashSync('ismael', saltRounds)}`, isAdmin: false},
        {username: 'admin', password: `${bcrypt.hashSync('admin', saltRounds)}`, isAdmin: true},
        {username: 'Donatello', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'Michaelangelo', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'Raphael', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'Leonardo', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'Master Splinter', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'Shredder', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'Blue Power Ranger', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'Yellow Power Ranger', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'Red Power Ranger', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'Green Power Ranger', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'Black Power Ranger', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
        {username: 'White Power Ranger', password: `${bcrypt.hashSync('test', saltRounds)}`, isAdmin: false},
      ]);
    });
};
