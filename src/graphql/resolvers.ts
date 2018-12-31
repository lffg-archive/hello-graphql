import { getAll, getSpecific } from '../utils/db'

export default {
  Query: {
    user: async (_: any, { id }: GQL.IUserOnQueryArguments) => {
      return getSpecific(id)
    },

    users: async () => {
      return getAll()
    }
  }
}
