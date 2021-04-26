'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Customer.init({
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false,},
    last_name: {type: DataTypes.STRING, allowNull: false,},
    password: {type: DataTypes.STRING, allowNull: false,},
    mail: {type: DataTypes.STRING, allowNull: false,},
    address: {type: DataTypes.STRING, allowNull: false,},
    phone: {type: DataTypes.STRING, allowNull: false,},
    updated_at: {type: DataTypes.STRING, allowNull: true},
    created_at: {type: DataTypes.DATE, allowNull: false}
  }, {
    sequelize,
    modelName: 'Customer',
    timestamps: false,
    autoQueryFallback: true
  });
  return Customer;
};