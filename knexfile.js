
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'q2db',
      host: '127.0.0.1'
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
    connection: 'postgres://qetkdkynlnqqme:6c609d71d0419fbb2a7de7f5a1a4f329a6c3b6e738a97f57e4d348b091776114@ec2-204-236-236-188.compute-1.amazonaws.com:5432/d4emghjonvc0a2',
    seeds: {
      directory: './seeds'
    }
  }

};
