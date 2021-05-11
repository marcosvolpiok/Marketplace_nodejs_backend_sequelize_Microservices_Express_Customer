const router = require('express').Router();
const Joi = require('joi');
const moment = require('moment');
const {
    serverRepositoryOb,
    serverControllerOb,
    messageControllerOb,
    shopControllerOb,
    productControllerOb,
    cartControllerOb,
    cartProductControllerOb,
    orderControllerOb,
    orderProductControllerOb,
    customerControllerOb,
    orderStateControllerOb
} = require('../dependencies/');
const checkAuth = require('../middlewares/checkAuth');

router.get('/shops/', checkAuth, shopControllerOb.list);

router.get('/shops/catalog', checkAuth, productControllerOb.list);
router.get('/shops/catalog/:id', checkAuth, productControllerOb.listByShop);
router.get('/shops/catalog/detail/:id', checkAuth, productControllerOb.listById);

router.get('/cart/', checkAuth, cartControllerOb.list);
router.get('/cart/user/', checkAuth, cartControllerOb.listByIdUser);
router.post('/cart/shop/:idShop', checkAuth, cartControllerOb.listByIdUserAndIdShop);

router.get('/cart/:idCart', checkAuth, cartProductControllerOb.listById);
router.put('/cart/', checkAuth, cartProductControllerOb.add);
router.delete('/cart/product/', checkAuth, cartProductControllerOb.delete);
router.patch('/cart/product/', checkAuth, cartProductControllerOb.update);

router.get('/order/', checkAuth, orderControllerOb.list);
router.put('/order/', checkAuth, orderControllerOb.addFromCart);
router.put('/order/byCart/', checkAuth, orderControllerOb.addFromCart);
router.get('/order/customer/', checkAuth, orderControllerOb.listByIdCustomer);
router.get('/order/shop/', checkAuth, orderControllerOb.listByIdShop);
router.get('/order/:id/:hash', checkAuth, orderControllerOb.listById);


router.get('/order/product/:id', checkAuth, orderProductControllerOb.listById);

router.get('/customer/', checkAuth, customerControllerOb.list);
router.put('/customer/', checkAuth, customerControllerOb.add);
router.post('/customer/login/', checkAuth, customerControllerOb.login);

router.get('/order/states/', checkAuth, orderStateControllerOb.list);




function listByServer(req, res, next){
    const schema = Joi.object({
        id: Joi.number().required()
    });
    validateRequest(req, next, schema);
}

async function addServerSchema(req, res, next) {   
    let params=req;
    params.body.created_at=moment(moment(req.body.created_at, 'hh-mm-ss-DD-MM-YYYY')).format('YYYY-MM-DD hh:mm:ss');
    let arrServers=[];

    let servers = await serverRepositoryOb.list();
    servers.forEach((s)=>{
        arrServers.push(s.server);
    });
    
    const schema = Joi.object({
        server: Joi.string().required(),
        server: Joi.string().invalid(...arrServers).messages({
            'any.invalid': 'Server name can\'t be repeated'
        }),
        description: Joi.string().required(),
        server_type: Joi.string().required(),
        created_at: Joi.date().required()
    });
    validateRequest(params, next, schema);
    
}



function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    let params;

    if(Object.keys(req.body).length>0){
        params=req.body;

    }else{
        params=req.params;
    }

    const { error, value } = schema.validate(params, options);

    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}






module.exports = router;