const router = require('express').Router();
const Joi = require('joi');
const moment = require('moment');
const {
    serverRepositoryOb,
    serverControllerOb,
    messageControllerOb
} = require('./dependencies');

router.get('/servers/', serverControllerOb.list);
router.post('/servers/add/', addServerSchema, serverControllerOb.add);

router.get('/messages/', messageControllerOb.list);
router.get('/messagesByServer/:id', listByServer, messageControllerOb.listByServer);
router.get('/messages/static', messageControllerOb.static);
router.post('/messageByMessage', messageControllerOb.listByMessage);


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