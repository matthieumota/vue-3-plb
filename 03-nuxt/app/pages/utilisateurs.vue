<script setup lang="ts">
import z from 'zod'

useSeoMeta({
  title: 'Utilisateurs - Nuxt',
  description: 'Utilisateurs de Nuxt',
})

const { data: users, pending, error, refresh } = await useFetch('/api/users', {
  server: true, // ne pas faire la requete en SSR
  lazy: true, // quand on navigue, on n'attend pas la requête
})

const User = z.object({
  name: z.string({ message: 'Le nom est requis' }).min(3, { message: 'Le nom doit avoir au moins 3 caractères' }),
})
type UserType = z.infer<typeof User>

const newUser = ref<Partial<UserType>>({ name: undefined })
const loading = ref(false)
const errors = ref<Record<string, string[]>>()

const addUser = async () => {
  errors.value = undefined
  const result = User.safeParse(newUser.value)
  if (result.success) {
    loading.value = true
    await $fetch('/api/users', {
      method: 'post',
      body: result.data,
    })
    await refresh()
    loading.value = false
    newUser.value = {}
  } else {
    errors.value = z.flattenError(result.error).fieldErrors
  }
}

const validate = (field: keyof UserType) => {
  const result = User.shape[field].safeParse(newUser.value[field])
  if (result.error) {
    errors.value = { ...errors.value, [field]: z.flattenError(result.error).formErrors }
  }
}
</script>

<template>
  <h1 class="text-2xl">Utilisateurs</h1>

  <div>
    <div v-for="user in users">
      {{ user.name }}
    </div>
    <p v-if="pending">Chargement...</p>
    <p v-if="error">{{ error }}</p>
  </div>

  <h2 class="text-2xl mt-2">Ajouter un utilisateur</h2>
  {{ newUser }}
  <form class="max-w-sm" @submit.prevent="addUser">
    <div class="mb-2">
      <label for="name" class="block">Nom</label>
      <input
        id="name"
        type="text"
        class="border rounded-lg px-3 py-1 w-full"
        :class="{ 'border-red-500': errors?.name }"
        v-model="newUser.name"
        @blur="validate('name')"
      >
      <p v-if="errors?.name" class="text-red-500">
        {{ errors.name[0] }}
      </p>
    </div>

    <button class="px-4 py-1 rounded-lg bg-blue-500 text-white w-full disabled:opacity-50" :disabled="loading">Ajouter</button>
  </form>
</template>
