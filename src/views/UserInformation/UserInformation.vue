<template>
  <div class="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
    <h2 class="text-2xl font-bold text-pink-500 mb-6 text-center">User Information</h2>
    <div v-if="user">
      <!-- Show user info -->
      <div class="mb-4">
        <label class="block text-gray-700 font-semibold mb-1">Full Name</label>
        <input type="text" v-model="user.fullName" class="w-full border rounded px-4 py-2 bg-gray-100" disabled />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-semibold mb-1">Email</label>
        <input type="email" v-model="user.email" class="w-full border rounded px-4 py-2 bg-gray-100" disabled />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-semibold mb-1">Phone</label>
        <input type="text" v-model="user.phone" class="w-full border rounded px-4 py-2 bg-gray-100" disabled />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-semibold mb-1">Address</label>
        <input type="text" v-model="user.address" class="w-full border rounded px-4 py-2 bg-gray-100" disabled />
      </div>
      <div class="flex justify-center mt-8">
        <button @click="logout" class="bg-gray-300 hover:bg-gray-400 text-black font-bold px-6 py-2 rounded transition">
          Logout
        </button>
      </div>
    </div>
    <div v-else>
      <!-- Show register/login form here (copy from RegisterForm.vue, remove modal wrapper) -->
      <RegisterForm @registered="onRegistered" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RegisterForm from '../../components/RegisterForm.vue'

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
</script>