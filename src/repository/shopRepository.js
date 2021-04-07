const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class shopRepository extends Interface(baseRepository) {
    constructor(Shop, Sequelize, sequelize) {
        super();
        this.Shop=Shop;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async list () {
        const shop = await this.Shop.findAll({ attributes: ['id', 'name'] });

        return shop;
    }

    async add (params) {
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = shopRepository;