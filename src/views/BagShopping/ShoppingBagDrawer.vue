<template>
  <transition name="drawer">
    <div
      v-if="visible"
      class="fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 flex flex-col"
    >
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-xl font-bold">Shopping Bag</h2>
        <button @click="$emit('close')" class="text-2xl">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="flex-1 p-4 overflow-y-auto">
        <!-- Bag content goes here -->
        <p class="text-gray-500">Your bag is empty.</p>
      </div>
      <div class="p-4 border-t">
        <button class="w-full bg-pink-500 text-white py-2 rounded font-semibold">
          Checkout
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  visible: Boolean
})
defineEmits(['close'])
</script>

<style scoped>
.drawer-enter-active, .drawer-leave-active {
  transition: transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s;
}
.drawer-enter-from, .drawer-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.drawer-enter-to, .drawer-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>