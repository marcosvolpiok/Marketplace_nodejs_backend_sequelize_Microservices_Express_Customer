const req = require('express/lib/request');
const {
  customerServiceOb,
} = require('../dependencies/');

const resolvers = {
  Query: {
    
    async getCustomer(root, args, context) {
      context.req.url = `getCustomers`;
      return await customerServiceOb.list(context.req);
    },
  },

  Mutation: {
    async createCustomer(_, { input }) {
      const req = {body: input};
      return await customerServiceOb.add(req);
    },

    async loginCustomer(_, { input }) {
      const req = {body: input};
      return await customerServiceOb.login(req);
    },
  }   
}

module.exports = resolvers