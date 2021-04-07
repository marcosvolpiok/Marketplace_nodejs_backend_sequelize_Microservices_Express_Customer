const serverController = require('../controllers/serverController');
const messageController = require('../controllers/messageController');
const shopController = require('../controllers/shopController');
const shopCatalogController = require('../controllers/shopCatalogController');


const serverRepository = require('../repository/serverRepository');
const messageRepository = require('../repository/messageRepository');
const shopRepository = require('../repository/shopRepository');

const serverService = require('../services/serverService');
const messageService = require('../services/messageService');
const shopService = require('../services/shopService');


const {Message, Server, Shop, Sequelize, sequelize} = require('../models');
const serverRepositoryOb=new serverRepository(Server);
const serverServiceOb = new serverService(serverRepositoryOb);
const serverControllerOb = new serverController(serverServiceOb);


const messageRepositoryOb=new messageRepository(Message, Server, Sequelize, sequelize);
const messageServiceOb=new messageService(messageRepositoryOb);
const messageControllerOb = new messageController(messageServiceOb);

const shopRepositoryOb=new shopRepository(Shop, Sequelize, sequelize);
const shopServiceOb = new shopService(shopRepositoryOb);
const shopControllerOb = new shopController(shopServiceOb);

const shopCatalogControllerOb = new shopCatalogController(messageServiceOb);

module.exports = {
    Sequelize, sequelize, serverRepositoryOb, serverControllerOb, messageRepositoryOb, messageControllerOb, shopControllerOb, shopCatalogControllerOb
};