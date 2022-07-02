const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');
const { createClient } = require("redis");

class shopRepository extends Interface(baseRepository) {
    constructor(Shop, Sequelize, sequelize) {
        super();
        this.Shop=Shop;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async list () {
        
        // Connecting to redis
        const client = await createClient({
            host: "172.17.0.1",
            port: 6379
        });
        await client.connect();

        
        const reply = await client.get('shops');
        if(reply){
            return JSON.parse(reply);
        } else {
            const shop = await this.Shop.findAll({ attributes: ['id', 'name'] });
            await client.set('shops', JSON.stringify(shop));

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