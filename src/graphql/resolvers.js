const {
  shopServiceOb,
  productServiceOb,
  customerServiceOb,
  cartServiceOb,
  cartProductServiceOb
} = require('../dependencies/');

const resolvers = {
  Query: {
    async getShop(root, args, context) {
      context.req.url = 'getShop';
      return await shopServiceOb.list(context.req);
    },

    async getProduct(root, args, context) {
      context.req.url = 'getProducts';
      return await productServiceOb.list(context.req);
    },

    async getProductById(root, {id}, context) {
      context.req.params.id = id;
      context.req.url = `getProductById/${id}`;
      return await productServiceOb.listById(context.req);
    },

    async getProductByShop(root, {id}, context) {
      context.req.params.id = id;
      context.req.url = `getProductByShop/${id}`;
      return await productServiceOb.listByShop(context.req);
    },
    
    async getCustomer(root, args, context) {
      context.req.url = `getCustomers`;
      return await customerServiceOb.list(context.req);
    },  
    
    async getCart() {
      req = {};
      req.url = 'getCart';
      return await cartServiceOb.list(req);
    },

    async getCartByUser(root, args, context) {
      res = context.res
      return await cartServiceOb.listByIdUser(res);
    },

    async getCartByUserAndShop(root, args, context) {
      req = context.req;
      req.params.idShop = args.idShop;
      req.params.state = args.state;
      res = context.res;
      return await cartServiceOb.listByIdUserAndIdShop(req, res);
    },

    async getCartById(root, args, context) {
      req = context.req;
      req.params.idCart = args.idCart;
      res = context.res;

      return await cartProductServiceOb.listById(req, res);
    },
  },

  Mutation: {
    async createCustomer(_, { input }) {
      req = {body: input};
      return await customerServiceOb.add(req);
    },

    async loginCustomer(_, { input }) {
      req = {body: input};
      return await customerServiceOb.login(req);
    },  
    
    async addCart(_, { input }, context) {
      res = context.res;
      req = {body: input};

      return await cartProductServiceOb.add(req, res);
    },
  }   
}

module.exports = resolvers