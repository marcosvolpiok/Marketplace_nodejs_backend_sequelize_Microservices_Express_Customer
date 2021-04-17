const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class cartRepository extends Interface(baseRepository) {
    constructor(Cart, Shop, Sequelize, sequelize) {
        super();
        this.Cart=Cart;
        this.Shop=Shop;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async list () {
        const cart = await this.Cart.findAll({ attributes: ['id']  });

        return cart;
    }

    async listByIdUser (idCustomer) {
        const cart = await this.Cart.findOne({ attributes: ['id', 'id_shop'],
        where: {
            id_customer: idCustomer 
        },
        include: [
            { model: this.Shop, as: 'shop' }
        ],
     });

        return cart;
    }

    async listByIdUserAndIdShop (idCustomer, idShop) {
        const cart = await this.Cart.findOne({ attributes: ['id', 'id_shop'],
        where: {
            id_customer: idCustomer,
            id_shop: idShop
        },
        include: [
            { model: this.Shop, as: 'shop' }
        ],
     });

        return cart;
    }

    async listById (id) {
        const cart = await this.Cart.findByPk(id);

        return cart;
    }

    async add (params) {
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = cartRepository;