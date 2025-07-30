<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  color?: string
}>()

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => loading.value = false, 2500)
}
</script>

<template>
  <button class="px-4 py-1 rounded-lg text-white duration-300 disabled:opacity-50" :class="{
    'bg-red-500 hover:bg-red-700': color === 'red',
    'bg-blue-500 hover:bg-blue-700': color === 'blue' || !color,
  }"
    @click="handleClick"
    :disabled="loading"
  >
    <slot v-if="!loading" />
    <p v-else class="animate-bounce">...</p>
  </button>
</template>
