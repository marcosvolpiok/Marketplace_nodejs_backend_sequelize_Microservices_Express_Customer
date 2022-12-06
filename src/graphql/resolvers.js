const {
  shopRepositoryOb, productRepositoryOb
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
  },
}

module.exports = resolvers