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
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <nav>
      <NuxtLink v-for="link in menu" :to="link.to">
        {{ link.title }}
      </NuxtLink>
    </nav>

    <NuxtPage />
  </div>
</template>
