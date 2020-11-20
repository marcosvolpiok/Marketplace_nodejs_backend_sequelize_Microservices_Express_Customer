const sequelize = require('../mysql');

const Server = sequelize.define('servers', {
  id: {type: Sequelize.SMALLINT, primaryKey: true},
  name: Sequelize.STRING,
})

module.exports = Server;