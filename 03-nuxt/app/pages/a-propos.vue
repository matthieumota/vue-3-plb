<script setup lang="ts">
useSeoMeta({
  title: 'A propos - Nuxt',
  description: 'A propos de Nuxt',
})

const store = useAuthStore()
</script>

<template>
  <h1>A propos</h1>
  <button @click="store.logout">Déconnexion</button>
</template>
