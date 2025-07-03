<template>
  <div class="mx-auto mt-12 p-0 sm:p-6 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl">
    <!-- Header -->
    <div class="flex flex-col items-center py-8 px-6 bg-gradient-to-r from-pink-100 to-pink-50">
      <div class="w-24 h-24 rounded-full bg-pink-200 flex items-center justify-center mb-4 shadow">
        <svg class="w-16 h-16 text-pink-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-1.5A2.25 2.25 0 016.75 16.5h10.5a2.25 2.25 0 012.25 2.25v1.5" />
        </svg>
      </div>
      <h2 class="text-3xl font-extrabold text-pink-500 mb-1 tracking-tight">User Profile</h2>
      <p class="text-gray-500 mb-2 text-center">Welcome to your account page</p>
    </div>

    <!-- Profile Info -->
    <div v-if="user" class="px-8 py-8">
      <div class="space-y-6">
        <div class="flex items-center gap-3" v-for="(field, index) in fields" :key="index">
          <i :class="field.icon + ' text-pink-400 w-6 h-6'"></i>
          <div>
            <div class="text-xs text-gray-400 font-semibold">{{ field.label }}</div>
            <div class="text-lg font-bold text-gray-700">{{ field.value }}</div>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex justify-center mt-10 gap-5">
        <button @click="logout"
          class="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-full shadow transition text-lg">
          Logout
        </button>
        <button
          class="bg-pink-300 hover:bg-pink-600 text-pink-700 hover:text-white font-bold px-8 py-3 rounded-full shadow transition text-lg">
          Edit Profile
        </button>
      </div>

      <!-- Stats Section -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-pink-500 mb-4">User Stats</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div class="bg-pink-50 p-4 rounded-xl shadow">
            <div class="text-3xl font-bold text-pink-500">12</div>
            <div class="text-sm text-gray-600 mt-1">Orders</div>
          </div>
          <div class="bg-pink-50 p-4 rounded-xl shadow">
            <div class="text-3xl font-bold text-pink-500">5</div>
            <div class="text-sm text-gray-600 mt-1">Wishlist Items</div>
          </div>
          <div class="bg-pink-50 p-4 rounded-xl shadow">
            <div class="text-3xl font-bold text-pink-500">2</div>
            <div class="text-sm text-gray-600 mt-1">Items in Cart</div>
          </div>
        </div>
      </div>

      <!-- Purchase History -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-pink-500 mb-4">Purchase History</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="(product, index) in purchaseHistory"
            :key="index"
            class="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white"
          >
            <img :src="product.image" alt="product" class="w-full h-40 object-cover rounded mb-3" />
            <div class="font-bold text-gray-700">{{ product.name }}</div>
            <div class="text-gray-500 text-sm mt-1">USD ${{ product.price }}</div>
            <div class="text-xs text-gray-400 mt-2">Purchased on: {{ product.date }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Register form fallback -->
    <div v-else class="px-8 py-8">
      <RegisterForm @registered="onRegistered" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RegisterForm from '../../components/RegisterForm.vue'

// User info
const user = ref(null)
onMounted(() => {
  const userData = localStorage.getItem('user')
  if (userData) user.value = JSON.parse(userData)
})

function onRegistered() {
  const userData = localStorage.getItem('user')
  if (userData) user.value = JSON.parse(userData)
}
function logout() {
  localStorage.removeItem('user')
  user.value = null
}

// Reusable field structure
const fields = ref([
  { label: 'Full Name', icon: 'pi pi-user', value: user.value?.fullName || '' },
  { label: 'Date of birth', icon: 'pi pi-calendar', value: user.value?.dob || '' },
  { label: 'Gender', icon: 'pi pi-mars', value: user.value?.gender || '' },
  { label: 'Phone Number', icon: 'pi pi-mobile', value: user.value?.phone || '' },
  { label: 'Email', icon: 'pi pi-envelope', value: user.value?.email || '' },
  { label: 'Password', icon: 'pi pi-key', value: user.value?.password || '' }
])

// Dummy purchase history
const purchaseHistory = ref([
  {
    name: 'Pink Hoodie',
    price: 35.99,
    image: 'https://via.placeholder.com/300x200?text=Pink+Hoodie',
    date: '2025-06-22'
  },
  {
    name: 'Casual Sneakers',
    price: 49.99,
    image: 'https://via.placeholder.com/300x200?text=Sneakers',
    date: '2025-06-10'
  }
])
</script>
