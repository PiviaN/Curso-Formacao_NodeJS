const Sequelize = require("sequelize");

const connection = new Sequelize("guiapress", "root", "Pedro@2001", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
