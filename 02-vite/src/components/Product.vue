<script setup lang="ts">
import { computed, ref, watch } from 'vue'

type Variation = {
  color: string
  image: string
  price: number
}

export type Product = {
  id: number
  title: string
  brand: string
  image: string
  price: number
  inStock: boolean
  quantity: number
  features: string[]
  variations: Variation[]
}

const { product } = defineProps<{
  product: Product
}>()

const quantity = ref(1)
const selectedVariation = ref(0)

const variation = computed(() => product.variations[selectedVariation.value])
const name = computed(() => `${product.brand} ${product.title}`)
const price = computed(() => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })
    .format((product.price + variation.value.price) * quantity.value)
})

// Watch quantity and show alert
watch(quantity, (value, oldValue) => {
  console.log(value, oldValue)
  if (value > product.quantity) {
    alert('Pas plus de 10')
    quantity.value = oldValue
  }
})

const switchVariation = (index: number) => {
  selectedVariation.value = index
}
</script>

<template>
  <div class="grid grid-cols-2 gap-8 px-4 py-8">
    <div>
      <img
        :src="variation.image"
        :alt="product.title"
      />
    </div>
    <div>
      <h2 class="text-2xl font-semibold">{{ name }}</h2>
      <p>{{ price }}</p>
      <input type="number" v-model="quantity" class="border border-gray-300 rounded px-2 py-1">
      <button @click="quantity++">+</button>
      <p v-if="product.inStock" class="text-green-500">En stock</p>
      <p v-else class="text-red-500">Pas de stock</p>
      <ul>
        <li v-for="feature in product.features">
          {{ feature }}
        </li>
      </ul>

      <div class="flex gap-2">
        <button
          v-for="(variation, index) in product.variations"
          class="w-10 h-10"
          :class="{
            'bg-blue-500': variation.color === 'blue',
            'bg-red-500': variation.color === 'red',
            'border-2 border-gray-900': index === selectedVariation,
          }"
          @click="switchVariation(index)"
        >
        </button>
      </div>
    </div>
  </div>
</template>
