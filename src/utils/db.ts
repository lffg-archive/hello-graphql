import * as fs from 'fs'
import { join } from 'path'
import { promisify } from 'util'

const readFile = promisify(fs.readFile)
// const writeFile = promisify(fs.writeFile)

const DB_FILE = join(__dirname, '..', '..', 'db', 'users.json')

export interface User {
  id: number
  name: string
  lastName: string
  username: string
  age?: number
  gender?: 'M' | 'F' | undefined
  email: string
  isActive: boolean
  notificationCount: boolean
  availableToHire: boolean
}

export async function getAll() {
  const data = await readFile(DB_FILE, 'utf8')
  return JSON.parse(data) as User[]
}

export async function getSpecific(id: number) {
  const users = await getAll()
  return users.find(({ id: uid }: User) => uid === id)
}
