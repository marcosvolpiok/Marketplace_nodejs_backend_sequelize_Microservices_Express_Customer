const makeExecutableSchema = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
  type Query {
    getShop: [Shop]
  }

  type Shop {
      id: ID
      name: String
  }
`    


module.exports = makeExecutableSchema.makeExecutableSchema({
  typeDefs,
  resolvers
})