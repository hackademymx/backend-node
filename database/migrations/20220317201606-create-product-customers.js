"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productCustomers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
        onUpdated: "CASCADE",
        onDeleted: "CASCADE",
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "customers",
          key: "id",
        },
        onUpdated: "CASCADE",
        onDeleted: "CASCADE",
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("productCustomers");
  },
};
