const controller = {};
const Server = require('../models/server');

controller.list = (req, res) => {
    Server.findAll({ attributes: ['id', 'name'] })
    .then(servers => {
      res.json(servers)
    })
    .catch(err => {
        res.send({error: err.message});
    })
}

controller.add = async (req, res) => {
    const server = await Server.create(req.body);
    console.log(req.body);
    res.send(server);
}

module.exports = controller;