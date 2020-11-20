const controller = {};
const Server = require('../models/server');

controller.list = async (req, res) => {
    Server.findAll({ attributes: ['id', 'name'] })
    .then(servers => {
      res.json(servers)
    })
    .catch(err => {
        res.send({error: err.message});
    })
}

controller.listById = async (req, res) => {
    const sites = await Site.find({_id: req.params.id});
    res.send(sites);
}

controller.add = async (req, res) => {
    console.log(req.body);
    const site = new Site(req.body);
    await site.save();
    res.send(site);
}

controller.update = async (req, res) => {
    const { id } = req.params;
    const site = await Site.update({_id: id}, req.body);
    res.send(site);
}

controller.delete = async (req, res) => {
    const { id } = req.params;
    const site = await Site.remove({_id: id});
    res.send(site);
}

module.exports = controller;