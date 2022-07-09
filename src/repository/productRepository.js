const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class productRepository extends Interface(baseRepository) {
    constructor(Product, Image, Sequelize, sequelize, cacheClient) {
        super();
        this.Product=Product;
        this.Image=Image;
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

        const product = await this.Product.findAll({ attributes: ['id', 'name', 'description', 'created_at', 'updated_at'],
            include: [
                { model: this.Image, as: 'image' }
            ]
        });
        this.cacheClient.setCache(req.url, JSON.stringify(product));

        return product;
    }

    async listByShop (req, idShop) {
        const cache = await this.cacheClient.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        }

        const product = await this.Product.findAll({ attributes: ['id', 'name', 'description', 'created_at', 'updated_at'],
            where: {
                id_shop: req.params.id
            },
            include: [
                { model: this.Image, as: 'image' }
            ]
        });
        this.cacheClient.setCache(req.url, JSON.stringify(product));

        return product;
    }

    async listById (req, id) {
        const cache = await this.cacheClient.getCache(req.url);
        if(cache){
            return JSON.parse(cache);
        }
        
        const product = await this.Product.findOne({
            where:{
                id: req.params.id
            },
            include: [
            { model: this.Image, as: 'image' }
        ]
        });
        this.cacheClient.setCache(req.url, JSON.stringify(product));

        return product;
    }

    async add (params) {
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = productRepository;