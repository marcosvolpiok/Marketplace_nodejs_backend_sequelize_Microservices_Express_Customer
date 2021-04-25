const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class cartProductRepository extends Interface(baseRepository) {
    constructor(CartProduct, Cart, Shop, Product, Sequelize, sequelize) {
        super();
        this.CartProduct=CartProduct;
        this.Cart=Cart;
        this.Shop=Shop;
        this.Product=Product;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async listById (idCart) {
        const cart = await this.CartProduct.findAll({ attributes: ['id', 'id_cart', 'id_product', 'quantity'],
        where: {
            id_cart: idCart 
        },
        include: [
            { model: this.Cart, as: 'cart' },
            { model: this.Product, as: 'product' }
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

        //Check if cart exists
        if (cart) {
            cartId = cart.id;
        } else {
            const cartNew = await this.Cart.create({
                id_shop: params.idShop,
                id_customer: params.idCustomer,
                quantity: params.quantity
            });

            cartId = cartNew.id;
        }

        //Check if cartProduct exits
        const cartProduct = await this.CartProduct.findOne({
            where: {
                id_cart: cartId,
                id_product: params.idProduct
            }
        });

        if(cartProduct){
            return {
                state: 'OBJECT_EXISTS',
                message: 'The product exists in the cart',
                detail: {
                    id: cartProduct.id,
                    id_cart: cartId
                }
            };
        } else {
            const cartProductNew = await this.CartProduct.create({
                id_cart: cartId,
                id_product: params.idProduct,
                quantity: params.quantity
            });

            return cartProductNew;
        }
    }

    async update (params) {
        const cartProduct = await this.CartProduct.findByPk(params.id);
        if(params.quantity == 0){
            const destroy = await cartProduct.destroy();

            return destroy;
        }else{
            cartProduct.quantity = params.quantity;
            const update = await cartProduct.save();

            return update;
        }
    }

    async delete (params) {
        const cartProduct = await this.CartProduct.findOne({ attributes: ['id'],
            where: {
                id_cart: params.idCart,
                id_product: params.idProduct,
            }
        });

        if(cartProduct){
            const cartProductDestroy = await cartProduct.destroy();

            return cartProductDestroy;
        } else {
            return {state: 'OBJECT_NO_FOUND', message: 'Object doesnt found'};
        }
    }
}

module.exports = cartProductRepository;