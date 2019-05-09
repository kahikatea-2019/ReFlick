const getDbConn = require('knex')

const testConfig = require('../server/db').test

module.exports = {
  getTestDb: () => getDbConn(testConfig),
  // Create a separate in-memory database before each test
  // In our tests, we can get at the database as `t.context.db`
  initialise: (db) => {
    return db.migrate.latest()
      .then(() => {
        return db.seed.run()
      })
  },
  cleanup: (db) => {
    return db.destroy()
  }
}