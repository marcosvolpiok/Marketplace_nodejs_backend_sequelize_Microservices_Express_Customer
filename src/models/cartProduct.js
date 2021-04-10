'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        CartProduct.hasOne(models.Cart, {
        foreignKey: 'id',
        targetKey: 'id_cart',
        as: 'cart'
      });
    }
  };
  CartProduct.init({
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true, allowNull: false},
    id_cart: {type: DataTypes.INTEGER, allowNull: false,},
    id_product: {type: DataTypes.INTEGER, allowNull: false,},
    updated_at: {type: DataTypes.STRING, allowNull: true},
    created_at: {type: DataTypes.DATE, allowNull: false}
  }, {
    sequelize,
    modelName: 'CartProduct',
    timestamps: false,
    autoQueryFallback: true
  });
  return CartProduct;
};