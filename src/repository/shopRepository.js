const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');
const cacheHelper = require('../helpers/cacheHelper');

class shopRepository extends Interface(baseRepository) {
    constructor(Shop, Sequelize, sequelize) {
        super();
        this.Shop=Shop;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async list () { }

    async list2 (req) {
        const cache = await cacheHelper.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        } else {
            const shop = await this.Shop.findAll({ attributes: ['id', 'name'] });
            cacheHelper.setCache(req.url, JSON.stringify(shop))

            return shop;
        }
    }

    async add (params) {
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = shopRepository;