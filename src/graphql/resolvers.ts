import { getAll, getSpecific } from '../utils/db'

export default {
  Query: {
    hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => {
      return `Hello, ${name || 'World'}!`
    },

    user: async (_: any, { id }: GQL.IUserOnQueryArguments) => {
      return getSpecific(id)
    },

    users: async () => {
      return getAll()
    }
  }
}
