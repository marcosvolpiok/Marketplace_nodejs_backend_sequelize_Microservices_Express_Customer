const chai = require('chai');
const expect = chai.expect;
const messageRepository = require('../repository/messageRepository');
const SequelizeMock = require('sequelize-mock');
const {
    Sequelize, sequelize
} = require('../routes/dependencies');


const DBConnectionMock = new SequelizeMock();

describe("MessageRepository", function() {
    describe("list", function() {
      it("should list messages from the db", async function() {
        const messagesListArr={
            'id': 1,
            'message': 'Ping time out',
            'id_server': '1'
        };
        const MessageMock = DBConnectionMock.define('messages', messagesListArr);

        const serverListArr={
            'id': 1,
            'server': 'Super server',
            'description': 'the main server',
            'server_type': 'ubuntu server',
            'created_at': Date()
        };
        const ServerMock = DBConnectionMock.define('servers', serverListArr);

        MessageMock.belongsTo(ServerMock, {
            foreignKey: 'id_server',
            targetKey: 'id',
            as: 'server'
        });

        ServerMock.belongsTo(ServerMock, {
            foreignKey: 'id_server',
            targetKey: 'id',
            as: 'server'
        });


        const messageRepositoryOb = new messageRepository(MessageMock, ServerMock, Sequelize, sequelize);
        const list = await messageRepositoryOb.list();
       
        expect(list[0].dataValues.id).to.equal(messagesListArr.id);
        expect(list[0].dataValues.message).to.equal(messagesListArr.message);
        expect(list[0].dataValues.id_server).to.equal(messagesListArr.id_server);
      });

      it("should list messages by Server from the db", async function() {
        const messagesListArr={
            'id': 1,
            'message': 'Ping time out',
            'id_server': 1
        };
        const MessageMock = DBConnectionMock.define('messages', messagesListArr);

        const serverListArr={
            'id': 1,
            'server': 'Super server',
            'description': 'the main server',
            'server_type': 'ubuntu server',
            'created_at': Date()
        };
        const ServerMock = DBConnectionMock.define('servers', serverListArr);

        MessageMock.belongsTo(ServerMock, {
            foreignKey: 'id_server',
            targetKey: 'id',
            as: 'server'
        });

        ServerMock.belongsTo(ServerMock, {
            foreignKey: 'id_server',
            targetKey: 'id',
            as: 'server'
        });

        const messageRepositoryOb = new messageRepository(MessageMock, ServerMock, Sequelize, sequelize);
        const list = await messageRepositoryOb.listByServer(messagesListArr.id);
       
        expect(list[0].dataValues.id).to.equal(messagesListArr.id);
        expect(list[0].dataValues.message).to.equal(messagesListArr.message);
        expect(list[0].dataValues.id_server).to.equal(messagesListArr.id_server);
      });  
      
      it("should list messages by a search", async function() {
        const messagesListArr={
            'id': 1,
            'message': 'Ping time out',
            'id_server': 1
        };
        const MessageMock = DBConnectionMock.define('messages', messagesListArr);

        const serverListArr={
            'id': 1,
            'server': 'Super server',
            'description': 'the main server',
            'server_type': 'ubuntu server',
            'created_at': Date()
        };
        const ServerMock = DBConnectionMock.define('servers', serverListArr);

        MessageMock.belongsTo(ServerMock, {
            foreignKey: 'id_server',
            targetKey: 'id',
            as: 'server'
        });

        ServerMock.belongsTo(ServerMock, {
            foreignKey: 'id_server',
            targetKey: 'id',
            as: 'server'
        });

        const messageRepositoryOb = new messageRepository(MessageMock, ServerMock, Sequelize, sequelize);
        const list = await messageRepositoryOb.listByMessage('Ping');
       
        expect(list[0].dataValues.id).to.equal(messagesListArr.id);
        expect(list[0].dataValues.id_server).to.equal(messagesListArr.id_server);
      }); 


      it("should list a static", async function() {
        const messagesListArr={
            'id': 1,
            'message': 'Ping time out',
            'id_server': 1
        };
        const MessageMock = DBConnectionMock.define('messages', messagesListArr);

        const serverListArr={
            'id': 1,
            'server': 'Super server',
            'description': 'the main server',
            'server_type': 'ubuntu server',
            'created_at': Date()
        };
        const ServerMock = DBConnectionMock.define('servers', serverListArr);

        MessageMock.belongsTo(ServerMock, {
            foreignKey: 'id_server',
            targetKey: 'id',
            as: 'server'
        });

        ServerMock.belongsTo(ServerMock, {
            foreignKey: 'id_server',
            targetKey: 'id',
            as: 'server'
        });

        const messageRepositoryOb = new messageRepository(MessageMock, ServerMock, Sequelize, sequelize);
        const list = await messageRepositoryOb.static();
       
        expect(list[0].dataValues.id).to.equal(messagesListArr.id);
        expect(list[0].dataValues.id_server).to.equal(messagesListArr.id_server);
      });       
    });
});