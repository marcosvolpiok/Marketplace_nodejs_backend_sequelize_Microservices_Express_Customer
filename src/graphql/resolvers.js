const {
  shopRepositoryOb
} = require('../dependencies/');

const resolvers = {
  Query: {
      async getShop(root, args, context) {
          //console.log('reqqq', context.req.url)
          console.log('shopRepository ' + shopRepositoryOb)
          return await shopRepositoryOb.list(context.req);
      },
  },
}

module.exports = resolvers