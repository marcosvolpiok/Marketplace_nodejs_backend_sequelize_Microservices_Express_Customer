'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderProduct.hasOne(models.Order, {
        foreignKey: 'id',
        targetKey: 'id_order',
        as: 'order'
      });
      OrderProduct.hasMany(models.Product, {
        foreignKey: 'id',
        targetKey: 'id_product',
        as: 'product'
      });
      
    }
  };
  OrderProduct.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    id_order: {type: DataTypes.INTEGER, allowNull: false,},
    id_product: {type: DataTypes.INTEGER, allowNull: false,},
    quantity: {type: DataTypes.SMALLINT, allowNull: false,},
    updated_at: {type: DataTypes.STRING, allowNull: true},
    created_at: {type: DataTypes.DATE, allowNull: true}
  }, {
    sequelize,
    modelName: 'OrderProduct',
    timestamps: false,
    autoQueryFallback: true
  });
  return OrderProduct;
};