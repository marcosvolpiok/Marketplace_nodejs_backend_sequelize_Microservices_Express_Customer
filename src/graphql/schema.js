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
    getCartByUser: Cart
    getCartByUserAndShop(idShop: Int!, state: Int!): Cart
    getCartById(idCart: ID!): [CartDetail]

    getOrder: [Order]   
    getOrderByCustomer: [Order]
    getOrderByShop: [Order]
    getOrderByIdAndHash(idOrder: ID!, hash: String): Order
  }

  type Mutation {
    createCustomer(input: CustomerInput): Customer
    loginCustomer(input: CustomerLoginInput): CustomerLogin
    addCart(input: CartInput): Cart
    updateCart(input: CartUpdateInput): Cart 
    createOrderFromCart(input: CreateOrderFromCartInput): Order
    updateOrder(input: UpdateOrderInput): Order
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
    id: ID,
    id_cart: ID,
    id_shop: ID,
    id_product: ID,
    shop: Shop,
    id_customer: ID,
    state: Int,
    updated_at: DateTime,
    created_at: DateTime
  }

  type Shop {
    id: ID,
    name: String
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

  type CartDetail{
    id: ID,
    id_cart: ID,
    id_product: ID,
    quantity: Int,
    cart: [Cart],
    product: [Product]
  }

  type Order {
    id: ID,
    id_shop: ID,
    id_customer: ID,
    id_cart: ID,
    id_state: ID,
    total_amount: Float,
    updated_at: DateTime,
    created_at: DateTime,
    shop: Shop,
    state: String,
    message: String
    customer: Customer,
    orderProduct: OrderProduct,
    orderState: OrderState
  }

  type Order {
    state: String,
    detail: String,
    orderNew: OrderNew
  }

  type OrderNew {
    id: ID,
    id_shop: ID,
    id_customer: ID,
    id_cart: ID,
    total_amount: String,
    id_state: ID
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
    updateAt: DateTime,
    createdAt: DateTime
  }

  type OrderProduct {
    id: ID,
    id_order: ID,
    id_product: ID,
    quantity: Int,
    name: String,
    price: String,
    updated_at: DateTime,
    created_at: DateTime
  }

  type OrderState {
    id: ID,
    name: String,
    description: String,
    updated_at: DateTime,
    created_at: DateTime
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

  input CartUpdateInput {
    id: ID,
    quantity: Int
  }

  input CreateOrderFromCartInput {
    idCart: ID
  }

  input UpdateOrderInput {
    idOrder: ID!,
    idState: ID!
  }

  scalar DateTime
`

module.exports = makeExecutableSchema.makeExecutableSchema({
  typeDefs,
  resolvers
})