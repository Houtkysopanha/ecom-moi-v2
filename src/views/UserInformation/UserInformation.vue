<template>
  <div class="max-w-lg mx-auto mt-12 p-0 sm:p-6 bg-white rounded-2xl shadow-2xl overflow-hidden">
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
    <div v-if="user" class="px-8 py-8">
      <div class="space-y-6">
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4.5 20.25v-1.5A2.25 2.25 0 016.75 16.5h10.5a2.25 2.25 0 012.25 2.25v1.5" />
          </svg>
          <div>
            <div class="text-xs text-gray-400 font-semibold">Full Name</div>
            <div class="text-lg font-bold text-gray-700">{{ user.fullName }}</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.591 7.591a2.25 2.25 0 01-3.182 0l-7.591-7.591A2.25 2.25 0 012.25 6.993V6.75" />
          </svg>
          <div>
            <div class="text-xs text-gray-400 font-semibold">Email</div>
            <div class="text-lg font-bold text-gray-700">{{ user.email }}</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75m-19.5 0A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0v.243a2.25 2.25 0 00.659 1.591l7.591 7.591a2.25 2.25 0 003.182 0l7.591-7.591a2.25 2.25 0 00.659-1.591V6.75" />
          </svg>
          <div>
            <div class="text-xs text-gray-400 font-semibold">Phone</div>
            <div class="text-lg font-bold text-gray-700">{{ user.phone }}</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <div class="text-xs text-gray-400 font-semibold">Address</div>
            <div class="text-lg font-bold text-gray-700">{{ user.address }}</div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <button @click="logout"
          class="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-full shadow transition text-lg">
          Logout
        </button>
      </div>
    </div>
    <div v-else class="px-8 py-8">
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