"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.categories);

      products.belongsToMany(models.customers, {
        through: models.productCustomers,
      });
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};
