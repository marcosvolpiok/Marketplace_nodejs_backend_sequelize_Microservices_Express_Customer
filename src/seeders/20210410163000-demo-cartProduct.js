'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CartProducts', [
      {id_cart: 1, id_product: 1, updated_at: new Date(), created_at: new Date()},
      {id_cart: 1, id_product: 2, updated_at: new Date(), created_at: new Date()},
      {id_cart: 1, id_product: 3, updated_at: new Date(), created_at: new Date()},
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CartProducts', null, {});

  }
};
