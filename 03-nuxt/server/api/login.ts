import { users } from './users'

export default defineEventHandler(async (event) => {
  await new Promise(resolve => setTimeout(resolve, 300))

  if (event.method === 'POST') {
    const { name } = await readBody(event)
    const user = users.find(user => user.name === name)

    if (user) {
        return user
    }
  }
})
