<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from './components/Button.vue'

const value = ref(0)

const increment = () => value.value++
const decrement = () => value.value--

const name = ref('Fiorella')
const reverseName = computed(() => {
  console.log('COMPUTE')
  return name.value.split('').reverse().join('')
})
</script>

<template>
  <button @click="decrement">-</button>
  <h1>{{ value }}</h1>
  <p v-once>Valeur de départ : {{ value }}</p>
  <button @click="increment">+</button>

  <Button>Valider</Button>
  <Button color="red">Envoyer</Button>
  <Button>Sauvegarder</Button>

  <div>
    <input type="text" v-model="name">
    <h1>{{ name }} - {{ reverseName }}</h1>
  </div>
</template>

<style scoped>
button {
  /*background-color: lightblue;
  border: 0;
  font-size: 20px;*/
}
</style>
