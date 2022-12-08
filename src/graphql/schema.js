const makeExecutableSchema = require("graphql-tools");
const resolvers = require("./resolvers");
const { DateTime } = require('graphql-iso-date')

const typeDefs = `
  type Query {   
    getCustomer: [Customer],
  }

  type Mutation {
    createCustomer(input: CustomerInput): Customer
    loginCustomer(input: CustomerLoginInput): CustomerLogin
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

  scalar DateTime
`

module.exports = makeExecutableSchema.makeExecutableSchema({
  typeDefs,
  resolvers
})