const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class shopRepository extends Interface(baseRepository) {
    constructor(Shop, Sequelize, sequelize, cacheClient) {
        super();
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
        const shop = await this.Shop.findAll({ attributes: ['id', 'name'] });
        this.cacheClient.setCache(req.url, JSON.stringify(shop));

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