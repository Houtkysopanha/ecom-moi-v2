<template>
  <div class=" mx-auto mt-12 p-0 sm:p-6 bg-white rounded-2xl shadow-2xl overflow-hidden">
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
        <i class="pi pi-user text-pink-400 w-6 h-6"></i>
          <div>
            <div class="text-xs text-gray-400 font-semibold">Full Name</div>
            <div class="text-lg font-bold text-gray-700">{{ user.fullName }}</div>
          </div>
        </div>
         <div class="flex items-center gap-3">
          <i class="pi pi-calendar text-pink-400 w-6 h-6"></i>
          <div>
            <div class="text-xs text-gray-400 font-semibold">Date of birth</div>
            <div class="text-lg font-bold text-gray-700">{{ user.dob }}</div>
          </div>
        </div>
         <div class="flex items-center gap-3">
            <i class="pi pi-mars text-pink-400 w-6 h-6"></i>
          <div>
            <div class="text-xs text-gray-400 font-semibold">Gender</div>
            <div class="text-lg font-bold text-gray-700">{{ user.gender }}</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
           <i class="pi pi-mobile text-pink-400 w-6 h-6"></i>
          <div>
            <div class="text-xs text-gray-400 font-semibold">Phone Number</div>
            <div class="text-lg font-bold text-gray-700">{{ user.phone }}</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
           <i class="pi pi-envelope text-pink-400 w-6 h-6"></i>
          <div>
            <div class="text-xs text-gray-400 font-semibold">Email</div>
            <div class="text-lg font-bold text-gray-700">{{ user.email }}</div>
          </div>
        </div>
          <div class="flex items-center gap-3">
         <i class="pi pi-key text-pink-400 w-6 h-6"></i>
          <div>
            <div class="text-xs text-gray-400 font-semibold">Password</div>
            <div class="text-lg font-bold text-gray-700">{{ user.password }}</div>
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