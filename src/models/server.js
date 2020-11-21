const sequelize = require('../mysql');
const message = require('./message');

const Server = sequelize.define('servers', {
  id: {type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true},
  server: Sequelize.STRING,
  description: Sequelize.STRING,
  server_type: Sequelize.STRING,
  created_at: Sequelize.DATE
},
{
  timestamps: false,
});

//Server.belongsTo(message);

module.exports = Server;