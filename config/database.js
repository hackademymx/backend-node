const Sequelize = require("sequelize");
const {
  PG_DATABASE,
  PG_DIALECT,
  PG_HOST,
  PG_PORT,
  PG_USER,
  PG_PASSWORD,
  PG_SSL,
} = require("./config");

// Instanciamos a la clase Sequelize, para poder heredar y tener todos sus métodos/funciones.
// luego exportamos a la constante sequelize ->
const sequelize = new Sequelize(PG_DATABASE, PG_USER, PG_PASSWORD, {
  host: PG_HOST,
  dialect: PG_DIALECT,
});

module.exports = sequelize;
