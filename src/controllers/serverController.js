const controller = {};
const Server = require('../models/server');
const moment = require('moment');

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
    let params=req.body;
    params.created_at=moment(moment(req.body.created_at, 'hh-mm-ss-DD-MM-YYYY')).format('YYYY-MM-DD hh:mm:ss');
    const server = await Server.create(params);
    res.send(server);
}

module.exports = controller;