'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
        {id_shop: 1, id_customer: 1, id_cart: 1, id_state: 0, total_amount: 200, updated_at: new Date(), created_at: new Date()},
        
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});

  }
};
