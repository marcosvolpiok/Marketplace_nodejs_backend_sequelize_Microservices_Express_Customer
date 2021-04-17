const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class orderProductRepository extends Interface(baseRepository) {
    constructor(Order, OrderProduct, Shop, Sequelize, sequelize) {
        super();
        this.Order=Order;
        this.OrderProduct=OrderProduct;
        this.Shop=Shop;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async list () {
        const OrderProduct = await this.OrderProduct.findAll();

        return OrderProduct;
    }

    async add (params) {
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = orderProductRepository;