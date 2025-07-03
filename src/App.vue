<template>
  <div>
    <HeaderPage v-if="!$route.meta.hideHeader" />
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
  width: 10px;
  background: #ffe4ef;
}

::-webkit-scrollbar-thumb {
  background: #f472b6; 
  border-radius: 8px;
  border: 2px solid #ffe4ef;
}

::-webkit-scrollbar-thumb:hover {
  background: #ec4899; /* pink-500 */
}

/* For Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgb( 244, 114, 182) #ffe4ef;
}
</style>