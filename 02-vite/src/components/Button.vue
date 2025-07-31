<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  color?: string
}>()

const emit = defineEmits<{
  tap: [value: number],
}>()

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    emit('tap', Math.random())
  }, 0)
}

const color = ref(props.color)

let timeout: number

onMounted(() => {
  timeout = setTimeout(() => {
    color.value = ['red', 'blue'][Math.floor(Math.random() * 2)]
  }, 2000)
})

onUnmounted(() => {
  clearTimeout(timeout)
})
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
