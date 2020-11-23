'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Server.init({
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true, allowNull: false},
    server: {type: DataTypes.STRING, allowNull: false,},
    description: {type: DataTypes.INTEGER, allowNull: false},
    server_type: {type: DataTypes.STRING, allowNull: false},
    created_at: {type: DataTypes.DATE, allowNull: false}
  }, {
    sequelize,
    modelName: 'Server',
    timestamps: false
  });
  return Server;
};