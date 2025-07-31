<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from '@/components/Button.vue'
import Product, { type Product as ProductType } from '@/components/Product.vue'
import Counter from '@/components/Counter.vue'

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

let data

try {
  data = JSON.parse(localStorage.getItem('products') || '[1, 2, 3]')
} catch {
  data = [1, 2, 3]
}

const products = ref(data)

const addProduct = (value: number) => {
  products.value.push(value)
  localStorage.setItem('products', JSON.stringify(products.value))
}

const removeProduct = () => {
  products.value.splice(0, 1) // Supprime le 1er élément
  localStorage.setItem('products', JSON.stringify(products.value))
}

// const total = ref(10)
const counters = ref([0, 5, 5, 1, 2, 3])
const total = computed(() => counters.value.reduce((a, b) => a + b, 0))
</script>

<template>
  <h1>Accueil</h1>

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

  <h1>Total: {{ total }}</h1>
  <!-- <Counter @incremented="total += $event" />
  <Counter :start="5" :max="10" @incremented="total += $event" />
  <Counter :start="5" :max="10" @incremented="total += $event" /> -->

  {{ counters }}
  <Counter v-for="(counter, index) in counters" :start="counter" :max="index > 0 ? 10 : Infinity" @incremented="counters[index] = $event" />
  <button @click="counters.push(0)">Ajouter</button>
</template>

<style scoped>
button {
  /*background-color: lightblue;
  border: 0;
  font-size: 20px;*/
}
</style>
