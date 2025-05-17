<template>
  <div class="flex px-12 py-8 gap-12 min-h-screen font-sans">
    <!-- Thumbnails -->
    <div class="flex flex-col gap-4 overflow-y-auto w-20 shrink-0">
      <img
        v-for="(img, index) in thumbnails"
        :key="index"
        :src="img"
        class="w-20 h-28 object-cover border cursor-pointer transition duration-300"
        :class="[
          isIndexInView(index)
            ? 'opacity-100 border-black ring-1 ring-black'
            : 'opacity-50 border-gray-300 hover:opacity-80'
        ]"
      />
    </div>

    <!-- Main Images Display (2 per page, move 1 per click) -->
    <div class="flex gap-4 justify-center items-center w-[40rem] h-[39rem] shrink-0 relative overflow-hidden">
      <button
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 shadow z-10"
        @click="prevImages"
        :disabled="startIndex === 0"
      >
        <span class="text-2xl">&#8592;</span>
      </button>

      <transition-group name="slide-fade" tag="div" class="flex gap-4 w-full h-full justify-center items-center relative">
        <img
          v-for="(img, idx) in visibleImages"
          :key="startIndex + idx"
          :src="img"
          class="w-[330px] h-[50rem] object-cover shadow-md"
          alt="Main"
        />
      </transition-group>

      <button
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 shadow z-10"
        @click="nextImages"
        :disabled="startIndex + perPage >= thumbnails.length"
      >
        <span class="text-2xl">&#8594;</span>
      </button>
    </div>

    <!-- Product Details -->
    <div class="flex flex-col gap-6 flex-1">
      <h1 class="text-2xl font-semibold">{{ productData?.name || 'NOVVAAH FLUFFY HAT' }}</h1>
      <p class="text-lg font-medium">USD ${{ productData?.price?.toFixed(2) || '25.00' }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const productData = ref({})
const thumbnails = ref([])
const startIndex = ref(0)
const perPage = 2

onMounted(() => {
  if (route.query.data) {
    productData.value = JSON.parse(route.query.data)
    thumbnails.value = [
      productData.value.image,
      productData.value.hoverImage,
       productData.value.image,
      productData.value.hoverImage,
      productData.value.hoverImage,
    ]
    startIndex.value = 0
  }
})

const visibleImages = computed(() =>
  thumbnails.value.slice(startIndex.value, startIndex.value + perPage)
)

function nextImages() {
  if (startIndex.value + perPage < thumbnails.value.length) {
    startIndex.value += 1
  }
}
function prevImages() {
  if (startIndex.value > 0) {
    startIndex.value -= 1
  }
}
function isIndexInView(index) {
  return index >= startIndex.value && index < startIndex.value + perPage
}
</script>
<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 48%;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}
</style>
