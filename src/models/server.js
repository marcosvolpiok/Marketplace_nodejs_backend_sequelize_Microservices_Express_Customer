const sequelize = require('../mysql');
const message = require('./message');

const Server = sequelize.define('servers', {
  id: {type: Sequelize.SMALLINT, primaryKey: true},
  name: Sequelize.STRING,
},
{
  timestamps: false,
});

//Server.belongsTo(message);

module.exports = Server;