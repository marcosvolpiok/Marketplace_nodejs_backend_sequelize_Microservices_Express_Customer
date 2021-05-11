'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  };
  OrderState.init({
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false,},
    description: {type: DataTypes.STRING, allowNull: false},
    updated_at: {type: DataTypes.STRING, allowNull: true},
    created_at: {type: DataTypes.DATE, allowNull: false}
  }, {
    sequelize,
    modelName: 'OrderState',
    timestamps: false,
    autoQueryFallback: true
  });
  return OrderState;
};