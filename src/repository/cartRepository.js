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
        const cache = await this.cacheClient.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        }

        const cart = await this.Cart.findAll({ attributes: ['id']  });
        this.cacheClient.setCache(req.url, JSON.stringify(cart));
         
        return cart;
    }

    async listByIdUser (res) {
        const cart = await this.Cart.findOne({ attributes: ['id', 'id_shop'],
            where: {
                id_customer: res.userData.idCustomer 
            },
            include: [
                { model: this.Shop, as: 'shop' }
            ],
        });

        return cart;
    }

    async listByIdUserAndIdShop (idCustomer, idShop, state, res) {
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

        return cart;
    }

    async listById (req, id) {
        const cache = await cacheClient.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        }
        
        const cart = await this.Cart.findByPk(id);
        cacheClient.setCache(req.url, JSON.stringify(cart));

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