<script setup lang="ts">
const router = useRouter()

const titles: Record<string, string> = {
  'index': 'Accueil',
  'a-propos': 'A propos',
}

const menu = router.options.routes.map(route => ({
  to: route.path,
  title: titles[route.name as string] || route.name,
}))

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <header class="shadow-md">
    <nav class="max-w-5xl mx-auto flex gap-3">
      <NuxtLink v-for="link in menu" :to="link.to" class="inline-block px-2 py-2 capitalize" active-class="bg-gray-200">
        {{ link.title }}
      </NuxtLink>
    </nav>
  </header>
  
  <div class="max-w-5xl mx-auto py-32">
    <slot />
  </div>

  <footer class="text-center">
    {{ year }} &copy; Nuxt
  </footer>
</template>
