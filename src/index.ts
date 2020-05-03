import fs from 'fs'
import path from 'path'
const { ApolloServer, gql } = require('apollo-server')

const resolvers = {
  Query: {
    getCommittee(_, { id }) {
      return { id: `${id}`, name: 'foo' }
    }
  }
}

const server = new ApolloServer({ 
  typeDefs: `${fs.readFileSync(path.join(__dirname, 'schema.graphql'))}`,
  resolvers 
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})