const controller = {};
const Message = require('../models/message');
const Server = require('../models/server');
const sequelize = require('../mysql');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

Message.belongsTo(Server, {
  foreignKey: 'id_server',
  targetKey: 'id'
});

controller.list = async (req, res) => {  
    Message.findAll({ attributes: ['id', 'message'], include: [
    { model: Server, as: 'server' },
  ] })

    .then(messages => {
      res.json(messages)
    })
    .catch(err => {
        res.send({error: err.message});
    })
}

controller.listByServer = async (req, res) => {  
  Message.findAll({ attributes: ['id', 'message'], 
  where: {
    id_server: req.params.id
  },
  include: [
  { model: Server, as: 'server' },
  ]})

  .then(messages => {
    res.json(messages)
  })
  .catch(err => {
      res.send({error: err.message});
  })
}

controller.listByMessage = async (req, res) => {  
  Message.findAll({ attributes: ['id', 'message'], 
  where: {
    message: {
      [Op.like]: `%${req.body.message}%`
    }
  },
  include: [
  { model: Server, as: 'server' },
  ]})

  .then(messages => {
    res.json(messages)
  })
  .catch(err => {
      res.send({error: err.message});
  })
}



controller.static = async (req, res) => {  


  Message.findAll({
    attributes: {
      include: [
        [sequelize.literal('(select count(`m`.`id`) from  `messages` as m where m.id_server=messages.id_server)'), 'count'],
        
     ]
    },
    group: ['id_server'],
    order: [[sequelize.literal('count'), 'DESC']],
    limit: 3
  }).then(messages => {
    res.json(messages)
  })
  .catch(err => {
      res.send({error: err.message});
  })
}

module.exports = controller;