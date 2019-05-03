// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/ptracker.sqlite3'
    }
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },

}
