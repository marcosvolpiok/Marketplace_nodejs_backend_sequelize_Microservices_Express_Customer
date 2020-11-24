const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');
const {Message, Server, Sequelize, sequelize} = require('../models');
const Op = Sequelize.Op;

class messageRepository extends Interface(baseRepository) {
    constructor() {
        super();
    }

    async list () {
        const messages = await Message.findAll({ attributes: ['id', 'message'], include: [
            { model: Server, as: 'server' },
        ]});

        return messages;
    }

    async add (params) {
    }

    update (params) {
    }

    delete (params) {
    }

    async listByServer (idServer){
        const messages=await Message.findAll({ attributes: ['id', 'message'], 
        where: {
          id_server: idServer
        },
        include: [
        { model: Server, as: 'server' },
        ]});

        return messages;
    }

    async listByMessage (message){
        const messages = await Message.findAll({ attributes: ['id', 'message'], 
        where: {
          message: {
            [Op.like]: `%${message}%`
          }
        },
        include: [
        { model: Server, as: 'server' },
        ]});

        return messages;
    }

    async static (){
        const messages = await Message.findAll({
            attributes: {
              include: [
                [sequelize.literal('(select count(`m`.`id`) from  `messages` as m where m.id_server=Message.id_server)'), 'count'],
                
             ]
            },
            group: ['id_server'],
            order: [[sequelize.literal('count'), 'DESC']],
            limit: 3
          });

          return messages;
    }
}

module.exports = messageRepository;