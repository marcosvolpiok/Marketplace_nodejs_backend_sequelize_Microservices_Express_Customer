const serverController = require('../controllers/serverController');
const messageController = require('../controllers/messageController');
const serverRepository = require('../repository/serverRepository');
const messageRepository = require('../repository/messageRepository');
const serverService = require('../services/serverService');
const messageService = require('../services/messageService');


const {Message, Server, Sequelize, sequelize} = require('../models');
const serverRepositoryOb=new serverRepository(Server);
const serverServiceOb = new serverService(serverRepositoryOb);
const serverControllerOb = new serverController(serverServiceOb);

const messageRepositoryOb=new messageRepository(Message, Server, Sequelize, sequelize);
const messageServiceOb=new messageService(messageRepositoryOb);
const messageControllerOb = new messageController(messageServiceOb);

module.exports = {
    Message, Server, Sequelize, sequelize, serverRepositoryOb, serverControllerOb, messageRepositoryOb, messageControllerOb
};