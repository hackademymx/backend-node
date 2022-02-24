const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      // define association here
      //users.hasOne(models.customers);
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      role: DataTypes.ENUM(["CUSTOMER", "ADMIN"]),
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
