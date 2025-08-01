const users = [
  { id: 1, name: 'Matthieu' },
  { id: 2, name: 'Fiorella' },
  { id: 3, name: 'Marina' },
]

export default defineEventHandler(async (event) => {
  await new Promise(resolve => setTimeout(resolve, 300))

  if (event.method === 'POST') {
    const id = users[users.length - 1].id + 1
    const { name } = await readBody(event)
    users.push({ id, name })
  }

  return users
})
 