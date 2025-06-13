<template>
  <transition name="drawer">
    <div
      v-if="visible"
      class="fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[500px] lg:w-[700px] bg-white shadow-lg z-50 flex flex-col"
    >
      <!-- Header -->
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-lg sm:text-xl font-bold uppercase">Shopping Bag</h2>
        <button @click="$emit('close')" class="text-2xl p-2 rounded hover:bg-gray-100 transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Items -->
      <div class="flex-1 p-2 sm:p-4 overflow-y-auto">
        <div v-if="bagStore.bag.length === 0" class="text-gray-500 text-center py-10">Your bag is empty.</div>
        <div v-else class="flex flex-col gap-4">
          <div
            v-for="product in bagStore.bag"
            :key="product.name + product.color + product.size"
            class="flex gap-2 sm:gap-4 border-b pb-4"
          >
            <img :src="product.image" :alt="product.name" class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded" />

            <div class="flex-1">
              <div class="font-bold text-sm sm:text-md uppercase">{{ product.name }}</div>
              <div class="text-xs sm:text-sm text-gray-600 mt-1">Size: {{ product.size || 'FREE SIZE' }}</div>
              <div class="text-xs sm:text-sm text-gray-600">Color: {{ product.color || 'N/A' }}</div>

              <!-- Pricing -->
              <div class="flex items-center gap-2 mt-2">
                <span class="line-through text-xs sm:text-sm text-gray-400">USD ${{ product.originalPrice || 25 }}</span>
                <span class="text-red-500 font-semibold text-xs sm:text-sm">40% OFF</span>
              </div>
              <div class="text-black font-bold text-sm sm:text-base">USD ${{ product.price }}</div>

              <!-- Quantity controls -->
              <div class="flex items-center mt-2 gap-2">
                <button @click="decreaseQuantity(product)" class="border px-2 rounded bg-gray-100 hover:bg-gray-200">−</button>
                <span>{{ product.quantity }}</span>
                <button @click="increaseQuantity(product)" class="border px-2 rounded bg-gray-100 hover:bg-gray-200">+</button>
              </div>
            </div>

            <button
              class="text-red-500 hover:text-red-700 p-2"
              @click="bagStore.removeFromBag(product)"
              title="Remove"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="p-2 sm:p-4 border-t bg-gray-50">
        <div class="border-b py-4 space-y-2">
          <div class="flex justify-between items-center">
            <p class="text-base sm:text-lg font-bold uppercase">Total</p>
            <p class="text-sm sm:text-md font-bold">USD ${{ subtotal }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-base sm:text-lg uppercase">Save</p>
            <p class="text-sm sm:text-md font-bold text-gray-500">-USD ${{ totalDiscount }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-base sm:text-lg uppercase">Delivery Fee</p>
            <p class="text-sm sm:text-md font-bold">USD ${{ deliveryFee }}</p>
          </div>
        </div>
        <div class="flex justify-between items-center py-4">
          <p class="text-lg sm:text-xl font-bold uppercase">Amount to pay</p>
          <p class="text-lg sm:text-xl font-bold">USD ${{ amountToPay }}</p>
        </div>

        <router-link to="/CheckoutPage" @click="$emit('close')" >
          <button class="w-full bg-black text-base sm:text-xl uppercase text-white py-2 rounded font-semibold hover:bg-pink-600 transition">
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