const controller = {};
const {Server} = require('../models');
const moment = require('moment');
const serverRepository = require('../repository/serverRepository');


controller.list = async (req, res) => {
    const serverRepositoryOb=new serverRepository();
    const servers=await serverRepositoryOb.list();
    res.json(servers);
}

controller.add = async (req, res) => {
    const serverRepositoryOb=new serverRepository();
    const server=await serverRepositoryOb.add(req.body);
    res.json(server);
}

module.exports = controller;