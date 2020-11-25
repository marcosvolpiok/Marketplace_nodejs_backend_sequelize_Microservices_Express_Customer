const chai = require('chai');
const expect = chai.expect;
const serverRepository = require('../repository/serverRepository');
const SequelizeMock = require('sequelize-mock');


const DBConnectionMock = new SequelizeMock();

describe("ServerRepository", function() {
    describe("list", function() {
      it("should list servers from the db", async function() {
        const serversListArr=[{
            'id': 1,
            'server': 'Super server',
            'description': 'the main server',
            'server_type': 'ubuntu server',
            'created_at': Date()
        }];
        const ServersMock = DBConnectionMock.define('servers', serversListArr, {
            instanceMethods: {
            },
        });

        const serverRepositoryOb = new serverRepository(ServersMock);
        const list = await serverRepositoryOb.list();

        expect(list[0].dataValues[0].id).to.equal(serversListArr[0].id);
        expect(list[0].dataValues[0].server).to.equal(serversListArr[0].server);
        expect(list[0].dataValues[0].description).to.equal(serversListArr[0].description);
        expect(list[0].dataValues[0].server_type).to.equal(serversListArr[0].server_type);
        expect(list[0].dataValues[0].created_at).to.equal(serversListArr[0].created_at);        
      });

      it("should add servers to the db", async function() {
        const serversAdd={
            'id': 1,
            'server': 'Super server',
            'description': 'the main server',
            'server_type': 'ubuntu server',
            'created_at': Date()
        };
        const ServersMock = DBConnectionMock.define('servers', serversAdd, {
            instanceMethods: {
            },
        });

        const serverRepositoryOb = new serverRepository(ServersMock);
        const addResult = await serverRepositoryOb.add(serversAdd);

        expect(addResult.dataValues.id).to.equal(serversAdd.id);
        expect(addResult.dataValues.server).to.equal(serversAdd.server);
        expect(addResult.dataValues.description).to.equal(serversAdd.description);
        expect(addResult.dataValues.server_type).to.equal(serversAdd.server_type);
        expect(addResult.dataValues.created_at).to.equal(serversAdd.created_at);  
             
      });     
    });
});