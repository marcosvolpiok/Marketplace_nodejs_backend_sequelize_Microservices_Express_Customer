const bcrypt = require('bcrypt');
const { createClient } = require("redis");
const loginHelper = require('../helpers/loginHelper');
const { cacheHelper } = require('../helpers/cacheHelper');
//const clientOb = createClient.getClient();
const cacheHelperOb = new cacheHelper(createClient);



const shopController = require('../controllers/shopController');
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');
const cartProductController = require('../controllers/cartProductController');
const orderController = require('../controllers/orderController');
const orderProductController = require('../controllers/orderProductController');
const customerController = require('../controllers/customerController');
const orderStateController = require('../controllers/orderStateController');

const shopRepository = require('../repository/shopRepository');
const productRepository = require('../repository/productRepository');
const cartRepository = require('../repository/cartRepository');
const cartProductRepository = require('../repository/cartProductRepository');
const orderRepository = require('../repository/orderRepository');
const orderProductRepository = require('../repository/orderProductRepository');
const customerRepository = require('../repository/customerRepository');
const orderStateRepository = require('../repository/orderStateRepository');

const shopService = require('../services/shopService');
const productService = require('../services/productService');
const cartService = require('../services/cartService');
const cartProductService = require('../services/cartProductService');
const orderService = require('../services/orderService');
const orderProductService = require('../services/orderProductService');
const customerService = require('../services/customerService');
const orderStateService = require('../services/orderStateService');



const {Shop, Product, Image, Cart, CartProduct, Order, OrderProduct, Customer, OrderState, Sequelize, sequelize} = require('../models');

const shopRepositoryOb=new shopRepository(Shop, Sequelize, sequelize, cacheHelperOb);
const shopServiceOb = new shopService(shopRepositoryOb);
const shopControllerOb = new shopController(shopServiceOb);

const productRepositoryOb=new productRepository(Product, Image, Sequelize, sequelize, cacheHelperOb);
const productServiceOb = new productService(productRepositoryOb);
const productControllerOb = new productController(productServiceOb);

const cartRepositoryOb=new cartRepository(Cart, Shop, Sequelize, sequelize, cacheHelperOb);
const cartServiceOb = new cartService(cartRepositoryOb);
const cartControllerOb = new cartController(cartServiceOb);

const cartProductRepositoryOb=new cartProductRepository(CartProduct, Cart, Shop, Product, Sequelize, sequelize, cacheHelperOb);
const cartProductServiceOb = new cartProductService(cartProductRepositoryOb);
const cartProductControllerOb = new cartProductController(cartProductServiceOb);

const orderProductRepositoryOb=new orderProductRepository(Order, OrderProduct, Product, Shop, Sequelize, sequelize, cacheHelperOb);
const orderProductServiceOb = new orderProductService(orderProductRepositoryOb);
const orderProductControllerOb = new orderProductController(orderProductServiceOb);

const orderRepositoryOb=new orderRepository(Order, OrderProduct, Shop, Customer, OrderState, Sequelize, sequelize, cacheHelperOb);
const orderServiceOb = new orderService(orderRepositoryOb, orderProductRepositoryOb, cartRepositoryOb, cartProductRepositoryOb);
const orderControllerOb = new orderController(orderServiceOb);

const customerRepositoryOb=new customerRepository(Customer, Sequelize, sequelize, cacheHelperOb);
const customerServiceOb = new customerService(customerRepositoryOb, bcrypt, loginHelper);
const customerControllerOb = new customerController(customerServiceOb);

const orderStateRepositoryOb=new orderStateRepository(OrderState, Sequelize, sequelize, cacheHelperOb);
const orderStateServiceOb = new orderStateService(orderStateRepositoryOb, bcrypt, loginHelper);
const orderStateControllerOb = new orderStateController(orderStateServiceOb);

module.exports = {
    Sequelize, sequelize, shopControllerOb, productControllerOb, cartControllerOb, cartProductControllerOb, orderControllerOb, orderProductControllerOb, customerControllerOb, orderStateControllerOb,
    shopServiceOb, productServiceOb, productRepositoryOb, customerServiceOb
};