type User = {
  name: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>()

  const isLogged = computed(() => !!user.value)

  const login = () => {
    user.value = { name: 'Toto' }
  }

  const logout = () => {
    user.value = undefined
  }

  return { user, login, logout, isLogged }
})
