'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
        {name: 'jean', description: 'es un lindo jean', created_at: new Date(), updated_at: new Date()},
        {name: 'micro short', description: 'es un lindo short', created_at: new Date(), updated_at: new Date()},
        {name: 'remera', description: 'escote en V', created_at: new Date(), updated_at: new Date()},
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});

  }
};
