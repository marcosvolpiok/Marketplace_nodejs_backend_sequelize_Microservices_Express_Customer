'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Image, {
        foreignKey: 'id_product',
        targetKey: 'id_product',
        as: 'image'
      });
    }
  };
  Product.init({
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false,},
    description: {type: DataTypes.INTEGER, allowNull: false},
    updated_at: {type: DataTypes.STRING, allowNull: true},
    created_at: {type: DataTypes.DATE, allowNull: false}
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false,
    autoQueryFallback: true
  });
  return Product;
};