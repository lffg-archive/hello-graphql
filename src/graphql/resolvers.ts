import { getAll, getSpecific } from '../utils/db'

export default {
  Query: {
    hello: (_: any, { name }: any) => `Hello, ${name || 'World'}!`,

    user: async (_: any, { id }: any) => {
      return getSpecific(parseInt(id, 10))
    },

    users: async () => {
      return getAll()
    }
  }
}
