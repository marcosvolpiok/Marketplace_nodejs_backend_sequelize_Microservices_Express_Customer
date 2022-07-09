const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class orderStateRepository extends Interface(baseRepository) {
    constructor(OrderState, Sequelize, sequelize, cacheClient) {
        super();
        this.OrderState=OrderState;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        this.cacheClient = cacheClient;
    }

    async list (req) {
        const cache = await cacheClient.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        }

        const orderState = await this.OrderState.findAll();
        cacheClient.setCache(req.url, JSON.stringify(orderState));

        return orderState;
    }

    async add (params) {
    }

    async update (params) {
    }

    delete (params) {
    }
}

module.exports = orderStateRepository;