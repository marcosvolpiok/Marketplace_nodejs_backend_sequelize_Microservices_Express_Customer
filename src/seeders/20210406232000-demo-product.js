'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
        {name: 'jean', description: 'es un lindo jean', price: 700, id_shop: 1, created_at: new Date(), updated_at: new Date()},
        {name: 'micro short', description: 'es un lindo short', price: 250, id_shop: 2, created_at: new Date(), updated_at: new Date()},
        {name: 'remera', description: 'escote en V', price: 320, id_shop: 3, created_at: new Date(), updated_at: new Date()},
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});

  }
};
