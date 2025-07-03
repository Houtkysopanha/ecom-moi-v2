<template>
  <div class="">
        <h1 class="text-4xl font-bold md:text-4xl p-6 md:p-8 font-extabold bg-white text-pink-500 border-b-4 border-pink-400 text-center shadow-lg rounded-b-2xl tracking-widest">
        <router-link to="/" class="text-pink-500 hover:text-pink-600">
          KANDRA
        </router-link>
        </h1>
    </div>
  <div class="max-w-4xl mx-auto mt-20 p-10 bg-pink-200 rounded-3xl shadow-2xl">
    <!-- Success Icon & Title -->
     
    <div class="flex flex-col items-center mb-10">
      <svg class="w-24 h-24 text-pink-500 mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 12l2 2 4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
      <h2 class="text-3xl font-extrabold text-pink-600 mb-2 tracking-tight">Payment Successful!</h2>
      <p class="text-gray-500 text-lg text-center">Thank you for your purchase. You can track your order below.</p>
    </div>
    <!-- Order Info -->
    <div class="bg-pink-50 rounded-2xl p-8 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <div class="text-xs text-gray-400 font-semibold">Order Number</div>
        <div class="text-xl font-bold text-gray-700">{{ orderNumber }}</div>
      </div>
      <div>
        <div class="text-xs text-gray-400 font-semibold">Estimated Delivery</div>
        <div class="text-xl font-bold text-gray-700">{{ estimatedDelivery }}</div>
      </div>
      <div>
        <div class="text-xs text-gray-400 font-semibold">Shipping Address</div>
        <div class="text-base text-gray-700">{{ shippingAddress }}</div>
      </div>
    </div>
    <!-- Tracking Steps -->
    <div class="mb-10">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div v-for="(step, idx) in steps" :key="step.label" class="flex-1 flex flex-col items-center relative">
          <div
            :class="[
              'w-12 h-12 flex items-center justify-center rounded-full border-4 shadow-lg',
              idx <= currentStep ? 'bg-pink-500 border-pink-500 text-white' : 'bg-white border-gray-300 text-gray-400'
            ]"
          >
            <span class="font-bold text-xl">{{ idx + 1 }}</span>
          </div>
          <div class="mt-3 text-sm font-semibold text-center" :class="idx <= currentStep ? 'text-pink-600' : 'text-gray-400'">
            {{ step.label }}
          </div>
          <!-- Stepper line for desktop -->
          <div
            v-if="idx < steps.length - 1"
            class="hidden sm:block absolute top-6 right-0 w-full h-1"
            :style="{ left: '50%', width: '100%' }"
          >
            <div
              :class="[
                'h-1',
                idx < currentStep ? 'bg-pink-500' : 'bg-gray-300'
              ]"
              style="width: 100%; margin-left: 24px; margin-right: -24px;"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Order Details -->
    <div class="bg-gray-50 rounded-2xl p-8 mb-10">
      <h3 class="text-xl font-bold mb-6 text-pink-600">Order Details</h3>
      <div v-for="item in orderItems" :key="item.name" class="flex flex-col md:flex-row md:items-center mb-6 gap-4">
        <img :src="item.image" alt="Product" class="w-20 h-20 object-cover rounded-lg border shadow" />
        <div class="flex-1">
          <div class="font-semibold text-gray-800 text-lg">{{ item.name }}</div>
          <div class="text-sm text-gray-500">Qty: {{ item.quantity }}</div>
        </div>
        <div class="font-bold text-pink-600 text-lg">${{ (item.price * item.quantity).toFixed(2) }}</div>
      </div>
      <div class="flex justify-end border-t pt-6 mt-6">
        <div class="text-xl font-bold text-gray-700">Total: <span class="text-pink-600">${{ totalPrice.toFixed(2) }}</span></div>
      </div>
    </div>
    <!-- Google Map Section -->
    <div class="bg-white rounded-2xl p-6 shadow mb-10">
      <h3 class="text-xl font-bold mb-4 text-pink-600">Track Your Delivery</h3>
      <div class="w-full h-80 rounded-xl overflow-hidden border-2 border-pink-100 shadow">
        <iframe
          width="100%"
          height="100%"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          :src="googleMapUrl"
        ></iframe>
      </div>
      <div class="text-xs text-gray-400 mt-2 text-center">
        *This is a sample location. Your real delivery location will appear here.
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <router-link to="/" class="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full font-bold shadow transition text-lg">
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const orderNumber = ref('KM-20250628-001')
const estimatedDelivery = ref('July 5, 2025')
const shippingAddress = ref('123 Main St, Phnom Penh, Cambodia')
const steps = [
  { label: 'Order Placed' },
  { label: 'Processing' },
  { label: 'Shipped' },
  { label: 'Out for Delivery' },
  { label: 'Delivered' }
]
const currentStep = ref(2) // 0-based index; e.g. 2 = "Shipped"

const orderItems = ref([
  {
    name: 'Red Hat',
    image: '/images/Onsale1.png',
    quantity: 1,
    price: 53.0
  },
  {
    name: 'Mini Dress Black',
    image: '/images/Onsale2.png',
    quantity: 2,
    price: 30.0
  }
])

const totalPrice = computed(() =>
  orderItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const googleMapUrl = ref(
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.858769278194!2d104.9174457!3d11.5563736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109512f0b0b1e7b%3A0x6f6e6e6e6e6e6e6e!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1688123456789!5m2!1sen!2skh"
)
</script>

<style scoped>
/* Stepper line for desktop */
@media (min-width: 640px) {
  .stepper-line {
    position: absolute;
    top: 24px;
    left: 50%;
    width: calc(100% - 48px);
    height: 4px;
    background: #f472b6;
    z-index: 0;
  }
}
@media (max-width: 1023px) {
  .max-w-4xl {
    padding: 1.5rem !important;
  }
}
@media (max-width: 767px) {
  .max-w-4xl {
    padding: 0.5rem !important;
    margin-top: 1rem !important;
  }
}
</style>