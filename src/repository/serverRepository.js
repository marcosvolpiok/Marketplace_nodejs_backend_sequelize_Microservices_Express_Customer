const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');
//const {Server} = require('../models');

class serverRepository extends Interface(baseRepository) {
    constructor(Server) {
        super();
        this.Server=Server;
    }

    async list () {
        const servers = await this.Server.findAll({ attributes: ['id', 'server', 'description', 'server_type', 'created_at'] });
        return servers;
    }

    async add (params) {
        const server = await this.Server.create(params);
        return server;
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = serverRepository;