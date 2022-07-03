const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class cartRepository extends Interface(baseRepository) {
    constructor(Cart, Shop, Sequelize, sequelize, cacheClient) {
        super();
        this.Cart=Cart;
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

        const cart = await this.Cart.findAll({ attributes: ['id']  });
        cacheHelper.setCache(req.url, JSON.stringify(cart));
         
        return cart;
    }

    async listByIdUser (req, res) {
        const cache = await cacheHelper.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        }

        const cart = await this.Cart.findOne({ attributes: ['id', 'id_shop'],
            where: {
                id_customer: res.userData.idCustomer 
            },
            include: [
                { model: this.Shop, as: 'shop' }
            ],
        });
        cacheHelper.setCache(req.url, JSON.stringify(cart));

        return cart;
    }

    async listByIdUserAndIdShop (req, idCustomer, idShop, state, res) {
        const cache = await cacheHelper.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        }

        const cart = await this.Cart.findOne({ attributes: ['id', 'id_shop'],
        where: {
            id_customer: res.userData.idCustomer,
            id_shop: idShop,
            state: state
        },
        include: [
            { model: this.Shop, as: 'shop' }
        ],
        });
        cacheHelper.setCache(req.url, JSON.stringify(cart));

        return cart;
    }

    async listById (req, id) {
        const cache = await cacheHelper.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        }
        
        const cart = await this.Cart.findByPk(id);
        cacheHelper.setCache(req.url, JSON.stringify(cart));

        return cart;
    }

    async add (params) {
    }

    async update (params) {
        const cart = await this.Cart.findByPk(params.id);
        cart.state = params.state;
        await cart.save(); 
    }

    delete (params) {
    }
}

module.exports = cartRepository;