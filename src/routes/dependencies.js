const serverController = require('../controllers/serverController');
const messageController = require('../controllers/messageController');
const serverRepository = require('../repository/serverRepository');
const messageRepository = require('../repository/messageRepository');

const {Message, Server, Sequelize, sequelize} = require('../models');
const serverRepositoryOb=new serverRepository(Server);
const serverControllerOb = new serverController(serverRepositoryOb);

const messageRepositoryOb=new messageRepository(Message, Server, Sequelize, sequelize);
const messageControllerOb = new messageController(messageRepositoryOb);

module.exports = {
    Message, Server, Sequelize, sequelize, serverRepositoryOb, serverControllerOb, messageRepositoryOb, messageControllerOb
};