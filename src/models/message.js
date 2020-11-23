'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.Server, {
        foreignKey: 'id_server',
        targetKey: 'id',
        as: 'server'
      });
      
    }
  };
  Message.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    message: {type: DataTypes.STRING, allowNull: false},
    id_server: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'servers',
          key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'Message',
    timestamps: false
  });
  return Message;
};