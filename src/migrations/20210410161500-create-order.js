'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_shop: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_customer: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_cart: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_state: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      updated_at: {
        type: Sequelize.DATE
      },
      created_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};