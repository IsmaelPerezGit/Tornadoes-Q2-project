
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'q2db',
      host: 'https://pacific-cove-35046.herokuapp.com/'
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
      host: 'https://pacific-cove-35046.herokuapp.com/'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
