import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  function addFavorite(product) {
    if (!favorites.value.find(p => p.name === product.name)) {
      favorites.value.push(product)
    }
  }

  function removeFavorite(product) {
    favorites.value = favorites.value.filter(p => p.name !== product.name)
  }

  function isFavorite(product) {
    return favorites.value.some(p => p.name === product.name)
  }

  return { favorites, addFavorite, removeFavorite, isFavorite }
}, {
  persist: true // <-- add this line
})