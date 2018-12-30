import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import { join } from 'path'

import resolvers from './graphql/resolvers'

// Cria uma nova instância do express:
const app = express()

// Importa o esquema:
const schema = importSchema(join(__dirname, 'graphql', 'schema.graphql'))

// Cria o servidor:
const server = new ApolloServer({
  typeDefs: schema,
  resolvers
})

// Aplica o servidor GraphQL (Apollo Server) como um middleware do express:
server.applyMiddleware({ app })

// Mensagem para a página inicial (http://localhost:PORT):
app.get('/', (_, res) =>
  res.send(`
  <a href="/graphql">Go to the GraphQL Playground.</a>
`)
)

// "Liga" o servidor:
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening at ${port}.`))
