
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'test', password: 'test', isAdmin: true},
        {username: 'reese', password: 'reese', isAdmin: true},
        {username: 'kyle', password: 'kyle', isAdmin: true},
        {username: 'thomas', password: 'thomas', isAdmin: true},
        {username: 'johnny', password: 'johnny', isAdmin: true},
        {username: 'ismael', password: 'ismael', isAdmin: false},
      ]);
    });
};
