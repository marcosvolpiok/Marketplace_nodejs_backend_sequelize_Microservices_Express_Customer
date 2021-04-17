const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class orderRepository extends Interface(baseRepository) {
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
        const order = await this.Order.findAll({
            include: [
                { model: this.Shop, as: 'shop' }
            ]
        });

        return order;
    }

    async addFromCart () {
        
    }

    async add (params) {
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = orderRepository;