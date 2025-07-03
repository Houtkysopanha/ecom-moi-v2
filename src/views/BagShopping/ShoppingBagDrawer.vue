<template>
  <transition name="drawer">
    <div
      v-if="visible"
      class="fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[500px] lg:w-[700px] bg-white shadow-lg z-50 flex flex-col"
    >
      <!-- Header -->
      <div class="flex justify-between items-center p-4 border-b border-pink-200">
        <h2 class="text-lg sm:text-xl font-bold uppercase text-pink-600">Shopping Bag</h2>
        <button @click="$emit('close')" class="text-2xl p-2 rounded hover:bg-pink-100 transition text-pink-400">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Items -->
      <div class="flex-1 p-2 sm:p-4 overflow-y-auto">
        <div v-if="bagStore.bag.length === 0" class="text-pink-400 text-center py-10">Your bag is empty.</div>
        <div v-else class="flex flex-col gap-4">
          <div
            v-for="product in bagStore.bag"
            :key="product.name + product.color + product.size"
            class="flex gap-2 sm:gap-4 border-b border-pink-100 pb-4"
          >
            <img :src="product.image" :alt="product.name" class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded border-2 border-pink-100" />

            <div class="flex-1">
              <div class="font-bold text-sm sm:text-md uppercase text-pink-600">{{ product.name }}</div>
              <div class="text-xs sm:text-sm text-gray-600 mt-1">Size: {{ product.size || 'FREE SIZE' }}</div>
              <div class="text-xs sm:text-sm text-gray-600">Color: {{ product.color || 'N/A' }}</div>

              <!-- Pricing -->
              <div class="flex items-center gap-2 mt-2">
                <span class="line-through text-xs sm:text-sm text-gray-400">USD ${{ product.originalPrice || 25 }}</span>
                <span class="text-pink-400 font-semibold text-xs sm:text-sm">40% OFF</span>
              </div>
              <div class="text-pink-600 font-bold text-sm sm:text-base">USD ${{ product.price }}</div>

              <!-- Quantity controls -->
              <div class="flex items-center mt-2 gap-2">
                <button @click="decreaseQuantity(product)" class="border px-2 rounded bg-pink-50 hover:bg-pink-100 text-pink-500">−</button>
                <span>{{ product.quantity }}</span>
                <button @click="increaseQuantity(product)" class="border px-2 rounded bg-pink-50 hover:bg-pink-100 text-pink-500">+</button>
              </div>
            </div>

            <button
              class="text-pink-400 hover:text-pink-600 p-2"
              @click="bagStore.removeFromBag(product)"
              title="Remove"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="p-2 sm:p-4 border-t border-pink-200 bg-pink-50">
        <div class="border-b border-pink-100 py-4 space-y-2">
          <div class="flex justify-between items-center">
            <p class="text-base sm:text-lg font-bold uppercase text-pink-600">Total</p>
            <p class="text-sm sm:text-md font-bold text-pink-600">USD ${{ subtotal }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-base sm:text-lg uppercase text-pink-500">Save</p>
            <p class="text-sm sm:text-md font-bold text-pink-400">-USD ${{ totalDiscount }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-base sm:text-lg uppercase text-pink-500">Delivery Fee</p>
            <p class="text-sm sm:text-md font-bold text-pink-600">USD ${{ deliveryFee }}</p>
          </div>
        </div>
        <div class="flex justify-between items-center py-4">
          <p class="text-lg sm:text-xl font-bold uppercase text-pink-600">Amount to pay</p>
          <p class="text-lg sm:text-xl font-bold text-pink-600">USD ${{ amountToPay }}</p>
        </div>

        <router-link to="/CheckoutPage" @click="$emit('close')" >
          <button class="w-full bg-pink-500 text-base sm:text-xl uppercase text-white py-2 rounded font-semibold hover:bg-pink-600 transition">
            Checkout
          </button>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'
import { useBagStore } from '../../stores/bag'

defineProps({ visible: Boolean })
const bagStore = useBagStore()

const originalPrice = 25

const subtotal = computed(() =>
  bagStore.bag.reduce((sum, p) => sum + p.price * p.quantity, 0)
)

const totalDiscount = computed(() =>
  bagStore.bag.reduce((sum, p) => sum + ((originalPrice - p.price) * p.quantity), 0)
)

const deliveryFee = 1.25

const amountToPay = computed(() => subtotal.value + deliveryFee)

const increaseQuantity = (product) => {
  product.quantity += 1
}

const decreaseQuantity = (product) => {
  if (product.quantity > 1) product.quantity -= 1
}
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s cubic-bezier(.4, 0, .2, 1), opacity 0.3s;
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.drawer-enter-to,
.drawer-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>