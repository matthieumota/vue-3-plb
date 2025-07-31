<script setup lang="ts">
import { FetchError, ofetch } from 'ofetch'
import { onMounted, ref } from 'vue'

// https://jsonplaceholder.typicode.com/users
const users = ref([])
const loading = ref(false)
const error = ref<number>()

onMounted(async () => {
  loading.value = true
  // users.value = await ofetch('https://jsonplaceholder.typicode.com/users').catch((e: FetchError) => { error.value = e.statusCode })
  try {
    users.value = await ofetch('https://jsonplaceholder.typicode.com/users')
    await new Promise(resolve => setTimeout(resolve, 1000))
  } catch (e) {
    if (e instanceof FetchError) {
      error.value = e.statusCode
    }
  }

  loading.value = false
})

//onMounted(() => {
//  ofetch('https://jsonplaceholder.typicode.com/users').then(users => console.log('then', users))
//  console.log('NON BLOCK')
//})
</script>

<template>
  <h1>Utilisateurs API</h1>

  <div class="grid grid-cols-4" v-if="!loading && !error">
    <div v-for="user in users">
      {{ user }}
    </div>
  </div>

  <p v-if="loading">Chargement en cours...</p>
  <p v-if="error && !loading">Erreur sur l'API</p>
</template>
