"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productCustomers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productCustomers.belongsTo(models.products);
      productCustomers.belongsTo(models.customers);
    }
  }
  productCustomers.init(
    {
      productId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "productCustomers",
    }
  );
  return productCustomers;
};
