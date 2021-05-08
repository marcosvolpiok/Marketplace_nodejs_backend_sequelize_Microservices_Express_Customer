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
    customerControllerOb
} = require('../dependencies/');

router.get('/servers/', serverControllerOb.list);
router.post('/servers/add/', addServerSchema, serverControllerOb.add);

router.get('/messages/', messageControllerOb.list);
router.get('/messagesByServer/:id', listByServer, messageControllerOb.listByServer);
router.get('/messages/static', messageControllerOb.static);
router.post('/messageByMessage', messageControllerOb.listByMessage);

router.get('/shops/', shopControllerOb.list);

router.get('/shops/catalog', productControllerOb.list);
router.get('/shops/catalog/:id', productControllerOb.listByShop);
router.get('/shops/catalog/detail/:id', productControllerOb.listById);

router.get('/cart/', cartControllerOb.list);
router.get('/cart/user/:idCustomer', cartControllerOb.listByIdUser);
router.post('/cart/user/:idCustomer/shop/:idShop', cartControllerOb.listByIdUserAndIdShop);

router.get('/cart/:idCart', cartProductControllerOb.listById);
router.put('/cart/', cartProductControllerOb.add);
router.delete('/cart/product/', cartProductControllerOb.delete);
router.patch('/cart/product/', cartProductControllerOb.update);

router.get('/order/', orderControllerOb.list);
router.put('/order/', orderControllerOb.addFromCart);
router.put('/order/byCart/', orderControllerOb.addFromCart);
router.get('/order/customer/:id', orderControllerOb.listByIdCustomer);
router.get('/order/shop/:id', orderControllerOb.listByIdShop);
router.get('/order/:id/:hash', orderControllerOb.listById);


router.get('/order/product/:id', orderProductControllerOb.listById);

router.get('/customer/', customerControllerOb.list);
router.put('/customer/', customerControllerOb.add);
router.post('/customer/login/', customerControllerOb.login);




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