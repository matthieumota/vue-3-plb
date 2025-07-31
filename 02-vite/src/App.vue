<template>
  <header class="shadow mb-4">
    <nav class="max-w-5xl mx-auto flex gap-4">
      <RouterLink to="/" class="py-4" active-class="text-blue-600 font-bold">Accueil</RouterLink>
      <RouterLink to="/a-propos" class="py-4" active-class="text-blue-600 font-bold">A propos</RouterLink>
    </nav>
  </header>

  <div class="max-w-5xl mx-auto">
    <RouterView />
  </div>
</template>
