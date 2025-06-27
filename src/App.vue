<template>
  <div>
    <HeaderPage v-if="!hideHeader" />
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue'

const route = useRoute()
// Hide header only on /CheckoutPage (case-insensitive)
const hideHeader = computed(() => route.path.toLowerCase() === '/checkoutpage')
</script>

<style>
::-webkit-scrollbar {
  width: 5rem;
  background: #ec156b;
}

::-webkit-scrollbar-thumb {
  background: #ce1072; /* pink-400 */
  border: 20px solid #ffe4ef;
}

::-webkit-scrollbar-thumb:hover {
  background: #ec4899; /* pink-500 */
}

/* For Firefox */
* {
  scrollbar-width: 50px;
  scrollbar-color: #f472b6 #ffe4ef;
  
}
</style>