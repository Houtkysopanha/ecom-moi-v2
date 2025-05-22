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