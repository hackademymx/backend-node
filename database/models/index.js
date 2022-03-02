const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const {
  PG_DATABASE,
  PG_DIALECT,
  PG_HOST,
  PG_PASSWORD,
  PG_USER,
  PG_PORT,
  PG_SSL,
} = require("../../config/config");
const db = {};

// Este archivo se encarga de recorrer cada uno de los modelos existentes en la carpeta "models"
// Y al momento de recorrerlos, los almacena en la const db, que se declaró arriba.

const sequelize = new Sequelize(PG_DATABASE, PG_USER, PG_PASSWORD, {
  host: PG_HOST,
  dialect: PG_DIALECT,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
