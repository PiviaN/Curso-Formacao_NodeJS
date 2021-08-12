const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "Pedro@2001", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
