<template>
  <div class="main-page">
    <header>
      <p class="py-10 px-9 text-3xl uppercase font-bold">
        My Wishlist
        <span class="px-4 text-xl font-medium">&lt; {{ favoritesStore.favorites.length }} items &gt;</span>
      </p>
    </header>

    <div v-if="favoritesStore.favorites.length === 0" class="px-9 text-gray-400">No favorites yet.</div>

    <div v-else class="grid grid-cols-4 gap-6 px-9">
      <div
        v-for="product in favoritesStore.favorites"
        :key="product.name"
        class="border rounded shadow-sm overflow-hidden relative"
      >
        <!-- Delete Icon -->
        <button
          class="absolute top-2 right-2 bg-white rounded-full w-[35px] h-[35px] p-1 shadow"
          @click="favoritesStore.removeFavorite(product)"
        >
          <i class="fa-solid fa-trash"></i>
        </button>

        <!-- Image -->
        <img :src="product.image" :alt="product.name" class="w-full h-[493px] object-cover" />

        <!-- Product Info -->
        <div class="p-4">
          <div class="font-bold text-lg uppercase">{{ product.name }}</div>
          <div class="text-gray-700 text-md border-0 border-b border-black bg-transparent mt-2 p-0">
            USD ${{ product.price }}
          </div>

          <!-- Dropdowns -->
          <select class="w-full border-0 border-b text-gray-700 border-gray-700 bg-transparent mt-2 p-0 py-1 text-md">
            <option>RED</option>
          </select>
          <select class="w-full border-0 border-b text-gray-700 border-gray-700 bg-transparent mt-2 p-0 py-1 text-md">
            <option>Free size</option>
          </select>

          <!-- Button -->
          <button class="w-full bg-black text-white mt-4 py-2 text-lg font-semibold">
            ADD TO MY BAG
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '../../stores/favorites'
const favoritesStore = useFavoritesStore()
</script>