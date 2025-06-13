<template>
  <div class="main-page">
    <header>
      <p class="py-6 px-4 sm:py-10 sm:px-9 text-2xl sm:text-3xl uppercase font-bold">
        My Wishlist
        <span class="px-2 sm:px-4 text-lg sm:text-xl font-medium">&lt; {{ favoritesStore.favorites.length }} items &gt;</span>
      </p>
    </header>

    <div v-if="favoritesStore.favorites.length === 0" class="px-4 sm:px-9 text-gray-400">No favorites yet.</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-9">
      <div
        v-for="product in favoritesStore.favorites"
        :key="product.name"
        class="border rounded shadow-sm overflow-hidden relative bg-white"
      >
        <!-- Delete Icon -->
        <button
          class="absolute top-2 right-2 bg-white rounded-full w-8 h-8 sm:w-[35px] sm:h-[35px] p-1 shadow flex items-center justify-center"
          @click="favoritesStore.removeFavorite(product)"
        >
          <i class="fa-solid fa-trash"></i>
        </button>

        <!-- Image -->
        <img :src="product.image" :alt="product.name" class="w-full h-56 sm:h-72 md:h-80 lg:h-[340px] object-cover" />

        <!-- Product Info -->
        <div class="p-3 sm:p-4">
          <div class="font-bold text-base sm:text-lg uppercase">{{ product.name }}</div>
          <div class="text-gray-700 text-sm sm:text-md border-0 border-b border-black bg-transparent mt-2 p-0">
            USD ${{ product.price }}
          </div>

          <!-- Dropdowns -->
          <select class="w-full border-0 border-b text-gray-700 border-gray-700 bg-transparent mt-2 p-0 py-1 text-sm sm:text-md">
            <option>RED</option>
          </select>
          <select class="w-full border-0 border-b text-gray-700 border-gray-700 bg-transparent mt-2 p-0 py-1 text-sm sm:text-md">
            <option>Free size</option>
          </select>

          <!-- Button -->
          <button
            class="w-full bg-black text-white mt-4 py-2 text-base sm:text-lg font-semibold rounded"
            @click="bagStore.addToBag(product)"
          >
            ADD TO MY BAG
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '../../stores/favorites'
import { useBagStore } from '../../stores/bag'
const favoritesStore = useFavoritesStore()
const bagStore = useBagStore()
</script>