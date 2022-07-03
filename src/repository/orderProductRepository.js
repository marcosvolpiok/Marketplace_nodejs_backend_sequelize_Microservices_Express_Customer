const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class orderProductRepository extends Interface(baseRepository) {
    constructor(Order, OrderProduct, Product, Shop, Sequelize, sequelize, cacheClient) {
        super();
        this.Order=Order;
        this.OrderProduct=OrderProduct;
        this.Product=Product;
        this.Shop=Shop;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        this.cacheClient = cacheClient;   
    }

    async list (req) {
        const cache = await cacheHelper.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        }

        const OrderProduct = await this.OrderProduct.findAll();
        cacheHelper.setCache(req.url, JSON.stringify(OrderProduct));

        return OrderProduct;
    }

    async listById (req, id) {
        const cache = await cacheHelper.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        }

        const OrderProduct = await this.OrderProduct.findAll({
        where: {
            id_order: id 
        },
        include: [
            { model: this.Order, as: 'order' },
            { model: this.Product, as: 'product' },
            
        ],
        });
        cacheHelper.setCache(req.url, JSON.stringify(OrderProduct));
        
        return OrderProduct;
    }

    async add (params) {
        const orderProductNew = await this.OrderProduct.create({
            id_shop: params.idShop,
            id_order: params.idOrder,
            id_product: params.idProduct,
            quantity: params.quantity,
            name: params.name,
            price: params.price
        });

        return orderProductNew;
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = orderProductRepository;