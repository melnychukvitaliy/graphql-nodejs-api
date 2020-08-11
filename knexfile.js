const { mysql } = require("./src/config");

module.exports = {
  client: "mysql",
  connection: mysql,
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
