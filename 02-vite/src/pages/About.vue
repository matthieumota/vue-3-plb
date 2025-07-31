<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref, watch } from 'vue'

const date = ref(new Date())
let interval: number

console.log(document.querySelector('h1'))
onMounted(() => {
  console.log(document.querySelector('h1'))
  interval = setInterval(() => {
    console.log('tick')
    date.value = new Date()
  }, 10000)
})

const test = ref(0)

onUpdated(() => {
  console.log('updated', test)
})

watch(test, () => {
  console.log('watch', test)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <h1 @click="test++">A propos</h1>
  <p>{{ date }}</p>
</template>
