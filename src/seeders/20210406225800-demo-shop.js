'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shops', [
        {name: 'Misoni'},
        {name: 'Mikona'},
        {name: '3M'}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shops', null, {});

  }
};
