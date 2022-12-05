const {
  shopRepositoryOb
} = require('../dependencies/');

const resolvers = {
  Query: {
      async getShop(root, args, context) {
          return await shopRepositoryOb.list(context.req);
      },
  },
}

module.exports = resolvers