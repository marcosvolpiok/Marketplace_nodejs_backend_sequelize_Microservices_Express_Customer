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
        let cartId;

        //Searches if exists cart active with this user
        const cart = await this.Cart.findOne({ attributes: ['id'],
        where: {
            id_customer: params.idCustomer,
            id_shop: params.idShop,
            state: 0
        }
        });

        if (cart) {
            cartId = cart.id;
        } else {
            const cartNew = await this.Cart.create({
                id_shop: params.idShop,
                id_customer: params.idCustomer
            });

            cartId = cartNew.id;
        }

        const cartProduct = await this.CartProduct.create({
            id_cart: cartId,
            id_product: params.idProduct
        });

        console.log('ID DE CARRO: ', cartId);

        return {cartProduct};
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = cartProductRepository;