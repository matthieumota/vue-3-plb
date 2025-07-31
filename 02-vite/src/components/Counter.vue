<script setup lang="ts">
import { ref, watch } from 'vue'
import Button from './Button.vue'

const props = withDefaults(defineProps<{
    start?: number
    max?: number
  }>(), {
    start: 0,
    max: Infinity,
  }
)

const emit = defineEmits<{
  incremented: [value: number],
}>()

const value = ref(props.start)

const increment = () => {
  value.value++
  //emit('incremented', value.value)
}
const decrement = () => {
  value.value--
  //emit('incremented', value.value)
}

watch(value, (value, oldValue) => {
  emit('incremented', value)
})
</script>

<template>
  <div class="flex gap-2 mb-2">
    <Button @tap="decrement" :disabled="value <= 0">-</Button>
    <div class="text-center" :class="{ 'bg-red-500': value >= props.max }">
      <h1>{{ value }}</h1>
      <input type="number" v-model="value">
      <p v-once>Valeur de départ : {{ value }}</p>
    </div>
    <Button @tap="increment" v-if="value < props.max">+</Button>
  </div>
</template>
