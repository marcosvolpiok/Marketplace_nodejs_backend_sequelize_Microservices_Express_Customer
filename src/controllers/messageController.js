const controller = {};
const {Message, Server, Sequelize, sequelize} = require('../models');
const Op = Sequelize.Op;
const messageRepository = require('../repository/messageRepository');
const messageRepositoryOb=new messageRepository();


controller.list = async (req, res) => { 
  const messages=await messageRepositoryOb.list();
  res.json(messages);
}

controller.listByServer = async (req, res) => {  
  const messages=await messageRepositoryOb.listByServer(req.params.id);
  res.json(messages);
}

controller.listByMessage = async (req, res) => {  
  const messages=await messageRepositoryOb.listByMessage(req.body.message);
  res.json(messages);
}



controller.static = async (req, res) => {  
  const messages=await messageRepositoryOb.static();
  res.json(messages);
}

module.exports = controller;