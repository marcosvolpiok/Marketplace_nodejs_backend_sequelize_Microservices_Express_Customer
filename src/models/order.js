'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Order.belongsTo(models.Shop, {
        foreignKey: 'id_shop',
        targetKey: 'id',
        as: 'shop'
      });
    }
  };
  Order.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    id_shop: {type: DataTypes.INTEGER, allowNull: false,},
    id_customer: {type: DataTypes.INTEGER, allowNull: false,},
    id_cart: {type: DataTypes.INTEGER, allowNull: false,},
    id_state: {type: DataTypes.INTEGER, allowNull: true},
    total_amount: {type: DataTypes.DECIMAL(10,2), allowNull: false},
    updated_at: {type: DataTypes.STRING, allowNull: true},
    created_at: {type: DataTypes.DATE, allowNull: true},
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: false,
    autoQueryFallback: true
  });
  return Order;
};