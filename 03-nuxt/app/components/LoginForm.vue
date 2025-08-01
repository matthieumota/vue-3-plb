<script setup lang="ts">
const store = useAuthStore()

const auth = ref({ name: '' })

const login = () => {
  if (!auth.value.name) {
    return
  }

  store.login(auth.value.name.trim())
  auth.value.name = ''
}
</script>

<template>
  <div class="max-w-sm">
    <form @submit.prevent="login" v-if="!store.isLogged">
      <div class="mb-2">
        <label for="name" class="block">Nom</label>
        <input
          id="name"
          type="text"
          class="border rounded-lg px-3 py-1 w-full"
          v-model="auth.name"
        >
      </div>
  
      <button class="px-4 py-1 rounded-lg bg-blue-500 text-white w-full disabled:opacity-50">Connexion</button>
    </form>

    <button class="px-4 py-1 rounded-lg bg-blue-500 text-white w-full" @click="store.logout" v-else>Déconnexion</button>
  </div>
</template>
