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

const store = useAuthStore()
const { user, isLogged } = storeToRefs(store)
const { login, logout } = store
</script>

<template>
  <header class="shadow-md">
    <div class="max-w-5xl mx-auto flex items-center justify-between">
      <nav class="flex gap-3">
        <NuxtLink v-for="link in menu" :to="link.to" class="inline-block px-2 py-2 capitalize" active-class="bg-gray-200">
          {{ link.title }}
        </NuxtLink>
      </nav>

      <div class="flex gap-2">
        <p v-if="isLogged">{{ user?.name }}</p>
        <button @click="login('Toto')" v-if="!isLogged">Connexion</button>
        <button @click="logout" v-else>Déconnexion</button>
      </div>
    </div>
  </header>
  
  <div class="max-w-5xl mx-auto py-32">
    <slot />
  </div>

  <footer class="text-center">
    {{ year }} &copy; Nuxt
  </footer>
</template>
