'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderProducts', [
        {id_order: 1, id_product: 1, name: 'Jean', quantity: 33, price: 100, updated_at: new Date(), created_at: new Date()},
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderProducts', null, {});

  }
};
