'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Servers', [{
      server: 'Master Server',
      description: 'Master of the universe',
      server_type: 'Ubuntu server',
      created_at: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Servers', null, {});
  }
};
