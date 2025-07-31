<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from './components/Button.vue'
import Product, { type Product as ProductType } from './components/Product.vue'

const value = ref(0)

const increment = () => value.value++
const decrement = () => value.value--

const name = ref('Fiorella')
const reverseName = computed(() => {
  console.log('COMPUTE')
  return name.value.split('').reverse().join('')
})

const product = ref<ProductType>({
  id: 1,
  title: 'Cat',
  brand: 'Brand',
  image: 'https://media.gettyimages.com/id/1500448395/fr/photo/cat-taking-a-selfie.jpg?s=612x612&w=gi&k=20&c=v2qzfXZ1HGfdWt0mOG-QqV-5MSEoULSTm1pTmiZtWj8=',
  price: 10,
  inStock: true,
  quantity: 10,
  features: ['Mignon', 'Affectueux', 'Gourmand'],
  variations: [
    { color: 'blue', image: 'https://media.gettyimages.com/id/1500448395/fr/photo/cat-taking-a-selfie.jpg?s=612x612&w=gi&k=20&c=v2qzfXZ1HGfdWt0mOG-QqV-5MSEoULSTm1pTmiZtWj8=', price: 0 },
    { color: 'red', image: 'https://www.francebleu.fr/s3/cruiser-production-eu3/2025/02/33fe1bd1-39e9-431f-a932-0bee063e1ec9/1200x680_sc_250305-fich-diff-chat-mariia-zotova-getty.jpg', price: 2 },
  ],
})

const products = ref([1, 2, 3])

const addProduct = (value: number) => {
  products.value.push(value)
}

const removeProduct = () => {
  products.value.splice(0, 1) // Supprime le 1er élément
}
</script>

<template>
  <button @click="decrement">-</button>
  <h1>{{ value }}</h1>
  <p v-once>Valeur de départ : {{ value }}</p>
  <button @click="increment">+</button>

  <ul>
    <li v-for="product in products">
      {{ product }}
    </li>
  </ul>

  <Button @tap="addProduct">Valider</Button>
  <Button @tap="removeProduct" color="red">Envoyer</Button>
  <Button>Sauvegarder</Button>

  <div>
    <input type="text" v-model="name">
    <h1>{{ name }} - {{ reverseName }}</h1>
  </div>

  <Product :product />
</template>

<style scoped>
button {
  /*background-color: lightblue;
  border: 0;
  font-size: 20px;*/
}
</style>
