
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'test', password: 'test', isAdmin: false},
        {username: 'reese', password: 'ilikelittleboys69', isAdmin: false},
        {username: 'kyle', password: 'kyle', isAdmin: false},
        {username: 'thomas', password: 'thomas', isAdmin: false},
        {username: 'johnny', password: 'johnny', isAdmin: false},
        {username: 'ismael', password: 'ismael', isAdmin: false},
        {username: 'admin', password: 'admin', isAdmin: true},
      ]);
    });
};
