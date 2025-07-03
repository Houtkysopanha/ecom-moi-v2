<template>
  <div class="main-page bg-gray-50 min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b mb-6">
      <div class=" mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl font-bold text-pink-500 uppercase tracking-wide">
          My Wishlist
          <span class="text-lg sm:text-xl text-gray-700 font-medium ml-2">
            &lt; {{ favoritesStore.favorites.length }} items &gt;
          </span>
        </h1>
      </div>
    </header>

    <!-- Empty State -->
    <div v-if="favoritesStore.favorites.length === 0" class="text-center text-gray-400 text-lg mt-20">
      No favorites yet.
    </div>

    <!-- Wishlist Grid -->
    <div
      v-else
      class="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 pb-10"
    >
      <div
        v-for="product in favoritesStore.favorites"
        :key="product.name"
        class="bg-white border rounded-xl shadow-sm hover:shadow-md transition duration-300 relative"
      >
        <!-- Delete Button -->
        <button
          class="absolute top-3 right-3 bg-white rounded-full w-9 h-9 shadow flex items-center justify-center hover:bg-pink-100 transition"
          @click="favoritesStore.removeFavorite(product)"
        >
          <i class="fa-solid fa-trash text-pink-500 text-base"></i>
        </button>

        <!-- Product Image -->
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-64 object-cover rounded-t-xl"
        />

        <!-- Product Info -->
        <div class="p-4">
          <h2 class="text-lg sm:text-xl font-semibold text-pink-500 uppercase truncate">
            {{ product.name }}
          </h2>
          <p class="text-gray-800 mt-1 text-sm sm:text-base">USD ${{ product.price }}</p>

          <!-- Dropdowns -->
          <div class="mt-3 space-y-2">
            <select class="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700">
              <option>RED</option>
            </select>
            <select class="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700">
              <option>Free size</option>
            </select>
          </div>

          <!-- Add to Bag Button -->
          <button
            class="w-full bg-pink-500 hover:bg-pink-600 text-white mt-4 py-2 rounded-md text-sm sm:text-base font-medium transition"
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
