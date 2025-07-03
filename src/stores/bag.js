import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBagStore = defineStore('bag', () => {
  const bag = ref([])

  function addToBag(product) {
    if (!bag.value.find(p => p.name === product.name)) {
      bag.value.push({ ...product, quantity: 1 })
    }
  }

  function removeFromBag(product) {
    bag.value = bag.value.filter(p => p.name !== product.name)
  }

  function clearBag() {
    bag.value = []
  }

  return { bag, addToBag, removeFromBag, clearBag }
}, { persist: true })