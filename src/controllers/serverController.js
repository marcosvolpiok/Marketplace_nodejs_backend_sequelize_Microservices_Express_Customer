const controller = {};
const {Server} = require('../models');
const moment = require('moment');
const serverRepository = require('../repository/serverRepository');
const serverRepositoryOb=new serverRepository();


controller.list = async (req, res) => {
    try{
        const servers=await serverRepositoryOb.list();
        res.json(servers);
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

controller.add = async (req, res) => {
    try{
        const server=await serverRepositoryOb.add(req.body);
        res.json(server);
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

module.exports = controller;