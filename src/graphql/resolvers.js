const {
  shopRepositoryOb, productRepositoryOb, customerServiceOb
} = require('../dependencies/');

const resolvers = {
  Query: {
    async getShop(root, args, context) {
      context.req.url = 'getShop';
      return await shopRepositoryOb.list(context.req);
    },

    async getProduct(root, args, context) {
      context.req.url = 'getProducts';
      return await productRepositoryOb.list(context.req);
    },

    async getProductById(root, {id}, context) {
      context.req.params.id = id;
      context.req.url = `getProductById/${id}`;
      return await productRepositoryOb.listById(context.req);
    },

    async getProductByShop(root, {id}, context) {
      context.req.params.id = id;
      context.req.url = `getProductByShop/${id}`;
      return await productRepositoryOb.listByShop(context.req);
    },
    
    async getCustomer(root, args, context) {
      context.req.url = `getCustomers`;
      return await customerRepositoryOb.list(context.req);
    },   
  },

  Mutation: {
    async createCustomer(_, { input }) {
      req = {body: input};
      return await customerServiceOb.add(req);
    },
  }   
}

module.exports = resolvers