const sequelize = require('../mysql');

const Message = sequelize.define('messages', {
    id: {type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true, allowNull: false},
    message: {type: Sequelize.STRING, allowNull: false},
    id_server: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'servers',
            key: 'id',
        }
    }},
{
    timestamps: false,
});


module.exports = Message;