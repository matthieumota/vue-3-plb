type User = {
  name: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>()

  const isLogged = computed(() => !!user.value)

  const login = async (name: string) => {
    const response = await $fetch('/api/login', { method: 'POST', body: { name } })
    user.value = response
  }

  const logout = () => {
    user.value = undefined
  }

  return { user, login, logout, isLogged }
})
