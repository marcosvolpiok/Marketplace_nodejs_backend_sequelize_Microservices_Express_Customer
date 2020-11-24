const controller = {};
const {Message, Server, Sequelize, sequelize} = require('../models');
const Op = Sequelize.Op;
const messageRepository = require('../repository/messageRepository');
const messageRepositoryOb=new messageRepository();


controller.list = async (req, res) => { 
  try{
    const messages=await messageRepositoryOb.list();
    res.json(messages);
  }catch(e){
    res.status(500).json({message: e.message})
  }
}

controller.listByServer = async (req, res) => {  
  try{
    const messages=await messageRepositoryOb.listByServer(req.params.id);
    res.json(messages);
  }catch(e){
    res.status(500).json({message: e.message})
  }
}

controller.listByMessage = async (req, res) => {  
  try{
    const messages=await messageRepositoryOb.listByMessage(req.body.message);
    res.json(messages);
  }catch(e){
    res.status(500).json({message: e.message})
  }
}



controller.static = async (req, res) => {  
  const messages=await messageRepositoryOb.static();
  res.json(messages);
}

module.exports = controller;