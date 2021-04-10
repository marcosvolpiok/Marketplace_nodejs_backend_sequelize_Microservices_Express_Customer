const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class productRepository extends Interface(baseRepository) {
    constructor(Product, Image, Sequelize, sequelize) {
        super();
        this.Product=Product;
        this.Image=Image;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async list () {
        const product = await this.Product.findAll({ attributes: ['id', 'name', 'description', 'created_at', 'updated_at'],
        include: [
            { model: this.Image, as: 'image' }
        ]
             });

        return product;
    }

    async listByShop (idShop) {
        const product = await this.Product.findAll({ attributes: ['id', 'name', 'description', 'created_at', 'updated_at'],
        where: {
            id_shop: idShop
        },
        include: [
            { model: this.Image, as: 'image' }
        ]
             });

        return product;
    }

    async listById (id) {
        const product = await this.Product.findOne({
            where:{
                id: id
            },
            include: [
            { model: this.Image, as: 'image' }
        ]
        });

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