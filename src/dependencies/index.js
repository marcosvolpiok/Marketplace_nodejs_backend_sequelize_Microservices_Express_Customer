const serverController = require('../controllers/serverController');
const messageController = require('../controllers/messageController');
const shopController = require('../controllers/shopController');
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');
const cartProductController = require('../controllers/cartProductController');
const orderController = require('../controllers/orderController');
const orderProductController = require('../controllers/orderProductController');


const serverRepository = require('../repository/serverRepository');
const messageRepository = require('../repository/messageRepository');
const shopRepository = require('../repository/shopRepository');
const productRepository = require('../repository/productRepository');
const cartRepository = require('../repository/cartRepository');
const cartProductRepository = require('../repository/cartProductRepository');
const orderRepository = require('../repository/orderRepository');
const orderProductRepository = require('../repository/orderProductRepository');


const serverService = require('../services/serverService');
const messageService = require('../services/messageService');
const shopService = require('../services/shopService');
const productService = require('../services/productService');
const cartService = require('../services/cartService');
const cartProductService = require('../services/cartProductService');
const orderService = require('../services/orderService');
const orderProductService = require('../services/orderProductService');



const {Message, Server, Shop, Product, Image, Cart, CartProduct, Order, OrderProduct, Sequelize, sequelize} = require('../models');

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

const cartRepositoryOb=new cartRepository(Cart, Shop, Sequelize, sequelize);
const cartServiceOb = new cartService(cartRepositoryOb);
const cartControllerOb = new cartController(cartServiceOb);

const cartProductRepositoryOb=new cartProductRepository(CartProduct, Cart, Shop, Sequelize, sequelize);
const cartProductServiceOb = new cartProductService(cartProductRepositoryOb);
const cartProductControllerOb = new cartProductController(cartProductServiceOb);

const orderRepositoryOb=new orderRepository(Order, OrderProduct, Shop, Sequelize, sequelize);
const orderServiceOb = new orderService(orderRepositoryOb);
const orderControllerOb = new orderController(orderServiceOb);

const orderProductRepositoryOb=new orderProductRepository(Order, OrderProduct, Product, Shop, Sequelize, sequelize);
const orderProductServiceOb = new orderProductService(orderProductRepositoryOb);
const orderProductControllerOb = new orderProductController(orderProductServiceOb);


module.exports = {
    Sequelize, sequelize, serverRepositoryOb, serverControllerOb, messageRepositoryOb, messageControllerOb, shopControllerOb, productControllerOb, cartControllerOb, cartProductControllerOb, orderControllerOb, orderProductControllerOb
};