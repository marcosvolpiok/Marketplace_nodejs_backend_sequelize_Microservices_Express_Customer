const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class orderStateRepository extends Interface(baseRepository) {
    constructor(OrderState, Sequelize, sequelize) {
        super();
        this.OrderState=OrderState;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async list () {
        const orderState = await this.OrderState.findAll();

        return orderState;
    }

    async add (params) {
    }

    async update (params) {
    }

    delete (params) {
    }
}

module.exports = orderStateRepository;