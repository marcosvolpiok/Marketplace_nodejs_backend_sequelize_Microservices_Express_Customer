const controller = {};
const Message = require('../models/message');
const Server = require('../models/server');

Message.belongsTo(Server, {
  foreignKey: 'id_server',
  targetKey: 'id'
});

controller.list = async (req, res) => {  
    Message.findAll({ attributes: ['id', 'message'], include: [
    { model: Server, as: 'server' }, // load the profile picture.
    // Notice that the spelling must be the exact same as the one in the association
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
  { model: Server, as: 'server' }, // load the profile picture.
  // Notice that the spelling must be the exact same as the one in the association
  ]})

  .then(messages => {
    res.json(messages)
  })
  .catch(err => {
      res.send({error: err.message});
  })
}

module.exports = controller;