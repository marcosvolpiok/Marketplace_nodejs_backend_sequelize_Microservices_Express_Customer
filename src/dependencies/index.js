const serverController = require('../controllers/serverController');
const messageController = require('../controllers/messageController');
const shopController = require('../controllers/shopController');
const productController = require('../controllers/productController');


const serverRepository = require('../repository/serverRepository');
const messageRepository = require('../repository/messageRepository');
const shopRepository = require('../repository/shopRepository');
const productRepository = require('../repository/productRepository');

const serverService = require('../services/serverService');
const messageService = require('../services/messageService');
const shopService = require('../services/shopService');
const productService = require('../services/productService');


const {Message, Server, Shop, Product, Image, Sequelize, sequelize} = require('../models');
const serverRepositoryOb=new serverRepository(Server);
const serverServiceOb = new serverService(serverRepositoryOb);
const serverControllerOb = new serverController(serverServiceOb);


const messageRepositoryOb=new messageRepository(Message, Server, Sequelize, sequelize);
const messageServiceOb=new messageService(messageRepositoryOb);
const messageControllerOb = new messageController(messageServiceOb);

const shopRepositoryOb=new shopRepository(Shop, Sequelize, sequelize);
const shopServiceOb = new shopService(shopRepositoryOb);
const shopControllerOb = new shopController(shopServiceOb);

const productRepositoryOb=new productRepository(Product, Image, Sequelize, sequelize);
const productServiceOb = new productService(productRepositoryOb);
const productControllerOb = new productController(productServiceOb);


module.exports = {
    Sequelize, sequelize, serverRepositoryOb, serverControllerOb, messageRepositoryOb, messageControllerOb, shopControllerOb, productControllerOb
};