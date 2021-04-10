'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Carts', [
        {id_shop: 1, id_customer: 1, updated_at: new Date(), created_at: new Date()},
        {id_shop: 2, id_customer: 2, updated_at: new Date(), created_at: new Date()},
        {id_shop: 3, id_customer: 3, updated_at: new Date(), created_at: new Date()},
        
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Carts', null, {});

  }
};
