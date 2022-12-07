const makeExecutableSchema = require("graphql-tools");
const resolvers = require("./resolvers");
const { DateTime } = require('graphql-iso-date')

const typeDefs = `
  type Query {
    getShop: [Shop],
    
    getProduct: [Product],
    getProductById(id: ID): Product,
    getProductByShop(id: ID): [Product]

    getCustomer: [Customer],

    getCart: [Cart]
  }

  type Mutation {
    createCustomer(input: CustomerInput): Customer
    loginCustomer(input: CustomerLoginInput): CustomerLogin
    addCart(input: CartInput): addCart
  }

  type Shop {
    id: ID
    name: String
  }

  type Product {
    id: ID,
    id_shop: ID,
    price: String,
    name: String,
    description: String,
    created_at: DateTime,
    image: [Image]
  }

  type Image {
    id: ID,
    url: String,
    id_product: ID,
    created_at: DateTime
  }
  
  type Customer {
    id: ID,
    id_shop: ID,
    first_name: String,
    last_name: String,
    password: String,
    mail: String,
    address: String,
    phone: String,
    updatedAt: DateTime,
    createdAt: DateTime,
    status: String,
    message: String
  }

  type CustomerLogin {
    message: String
    user: Customer,
    token: String
  }

  type Cart {
    id: ID
  }

  type Detail {
    id: ID,
    id_cart: ID
  }

  type addCart {
    id: ID
    id_cart: ID,
    id_product: ID,
    quantity: Int,
    state: String,
    message: String,
    detail: Detail
  }

  input CustomerInput {
    first_name: String!,
    last_name: String!,
    password: String!,
    mail: String!,
    address: String!,
    phone: String!,
    id_shop: Int
  }

  input CustomerLoginInput {
    mail: String!,
    password: String!
  }

  input CartInput {
    idProduct: ID,
    idShop: ID,
    quantity: Int
  }

  scalar DateTime
`

module.exports = makeExecutableSchema.makeExecutableSchema({
  typeDefs,
  resolvers
})