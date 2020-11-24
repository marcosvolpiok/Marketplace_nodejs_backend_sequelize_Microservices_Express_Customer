const controller = {};
//const Server = require('../models/server');
const {Server} = require('../models');

const moment = require('moment');

controller.list = (req, res) => {
    Server.findAll({ attributes: ['id', 'server', 'description', 'server_type', 'created_at'] })
    .then(servers => {
      res.json(servers)
    })
    .catch(err => {
        res.send({error: err.message});
    })
}

controller.add = async (req, res) => {
    const server = await Server.create(req.body);
    res.send(server);
}

module.exports = controller;