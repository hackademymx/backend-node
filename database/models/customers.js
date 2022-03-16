"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customers.belongsTo(models.users);
      customers.belongsToMany(models.products, {
        through: models.productCustomers,
      });
    }
  }
  customers.init(
    {
      userId: DataTypes.INTEGER,
      money: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "customers",
    }
  );
  return customers;
};
