const sequelize = require('../mysql');
const server = require('./server');

const Message = sequelize.define('messages', {
    id: {type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true},
    message: Sequelize.STRING,
    /*
    id_server: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'servers',
        key: 'id',
    }}
    */
},
{
    timestamps: false,
});


module.exports = Message;