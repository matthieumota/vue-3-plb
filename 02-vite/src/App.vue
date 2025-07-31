<script setup lang="ts">
import routes from './routes'

const menu = routes.map(route => ({
  to: route.path,
  label: route.meta?.title,
}))
</script>

<template>
  <header class="shadow mb-4">
    <nav class="max-w-5xl mx-auto flex gap-4">
      <RouterLink v-for="link in menu" :to="link.to" class="py-4" active-class="text-blue-600 font-bold">
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>

  <div class="max-w-5xl mx-auto">
    <RouterView />
  </div>
</template>
