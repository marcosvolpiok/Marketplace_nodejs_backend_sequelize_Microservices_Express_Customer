const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');
const {Server} = require('../models');

class serverRepository extends Interface(baseRepository) {
    constructor() {
        super();
    }

    async list () {
        const servers = await Server.findAll({ attributes: ['id', 'server', 'description', 'server_type', 'created_at'] });
        return servers;
    }

    async add (params) {
        const server = await Server.create(params);
        return server;
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = serverRepository;