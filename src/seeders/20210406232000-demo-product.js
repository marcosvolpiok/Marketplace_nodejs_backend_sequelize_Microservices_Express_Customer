'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
        {name: 'jean', description: 'es un lindo jean', id_shop: 1, created_at: new Date(), updated_at: new Date()},
        {name: 'micro short', description: 'es un lindo short', id_shop: 2, created_at: new Date(), updated_at: new Date()},
        {name: 'remera', description: 'escote en V', id_shop: 3, created_at: new Date(), updated_at: new Date()},
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});

  }
};
