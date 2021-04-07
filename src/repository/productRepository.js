const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class productRepository extends Interface(baseRepository) {
    constructor(Product, Sequelize, sequelize) {
        super();
        this.Product=Product;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async list () {
        const product = await this.Product.findAll({ attributes: ['id', 'name', 'description', 'created_at', 'updated_at'] });

        return product;
    }

    async listById (id) {
        const product = await this.Product.findByPk(id);

        return product;
    }

    async add (params) {
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = productRepository;