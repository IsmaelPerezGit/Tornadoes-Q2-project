
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'q2db',
      host: '50.19.85.156'
    },
    seeds: {
      directory: './seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'q2db',
      host: '50.19.85.156'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
