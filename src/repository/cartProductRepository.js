const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class cartProductRepository extends Interface(baseRepository) {
    constructor(CartProduct, Cart, Shop, Sequelize, sequelize) {
        super();
        this.CartProduct=CartProduct;
        this.Cart=Cart;
        this.Shop=Shop;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async listById (idCart) {
        const cart = await this.CartProduct.findAll({ attributes: ['id', 'id_cart', 'id_product'],
        where: {
            id_cart: idCart 
        },
        include: [
            { model: this.Cart, as: 'cart' }
        ],
     });

     return cart;
    }
    

    async list () {
    }

    async add (params) {
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = cartProductRepository;