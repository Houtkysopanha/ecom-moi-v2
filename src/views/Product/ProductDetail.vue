<template>
   <div class="router px-9 py-2 flex gap-2 text-gray-500">
      <p>Accessories</p>
      <p>/</p>
      <p>Hats</p>
    </div>
  <div class="flex px-12 py-4 gap-12 h-auto font-sans">
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
    <div class="flex gap-4 justify-center items-center w-[50rem] h-[39rem] shrink-0 relative overflow-hidden">
   <button
  class="absolute left-0 top-1/2 -translate-y-1/2 
         w-10 h-10 flex items-center justify-center 
         bg-white bg-opacity-60 hover:bg-opacity-100 
         rounded-full shadow z-10"
  @click="prevImages"
  :disabled="startIndex === 0"
>
  <i class="pi pi-caret-left text-3xl"></i>
</button>


      <transition-group name="slide-fade" tag="div" class="flex gap-4 w-full h-full justify-center items-center relative">
        <img
          v-for="(img, idx) in visibleImages"
          :key="startIndex + idx"
          :src="img"
          class="w-[400px] h-[50rem] object-cover shadow-md"
          alt="Main"
        />
      </transition-group>

      <button
        class="absolute right-0 top-1/2 w-10 h-10 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-100 rounded-full p-1 shadow z-10"
        @click="nextImages"
        :disabled="startIndex + perPage >= thumbnails.length"
      >
         <i class="pi pi-caret-right text-3xl"></i>
      </button>
    </div>

    <!-- Product Details -->
    <div class="flex flex-col gap-2 flex-1">
      <div class="video-page">
        <div class="flex justify-center">
      <video class="w-screen h-[23rem] object-cover"  autoplay muted loop>
        <source
          src="/video/Video-hat-red.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
     <div class="full-video">
  <p
    class="mt-5 text-black hover:text-pink-400 underline cursor-pointer"
    @click="goToVideoDetail"
  >
    Click here to see full video <i class="pi pi-chart-line"></i>
  </p>
</div>
    </div>
    <div class="detail flex flex-row flex-1 gap-5">
      <div class="flex flex-col gap-3">
        <h1 class=" text-3xl uppercase font-bold"> {{ productData?.name || 'Null'}}</h1>
        <p class=" text-1xl font-medium"> USD $ {{ productData?.price?.toFixed(2) || 'Null' }}</p>
        <!-- Color Options -->
      <div>
        <p class="text-sm font-semibold mb-2">1 COLOR</p>
        <div class="flex gap-4">
          <div
            v-for="(color, index) in colors"
            :key="index"
            class="border p-1 cursor-pointer w-24"
            :class="color.name === selectedColor ? 'border-black' : 'border-gray-300'"
            @click="selectedColor = color.name"
          >
            <img :src="color.image" class="w-full h-20 object-cover" />
            <p class="text-center text-xs mt-1">{{ color.name }}</p>
          </div>
        </div>
      </div>
      </div>
      <div class="flex flex-col gap-3 border-l-2 border-black pl-4">
      <!-- Size Info -->
      <div>
        <p class="text-lg font-semibold mb-1">SIZE:</p>
        <div class="border border-gray-300 px-3 py-1 w-fit text-sm">Free Size</div>
      </div>

      <!-- Quantity Counter -->
      <div>
        <p class="text-lg font-semibold mb-1">QUANTITY:</p>
        <div class="flex items-center gap-2">
          <button @click="decreaseQuantity" class="border w-8 h-8 text-lg font-semibold">-</button>
          <span class="text-lg">{{ quantity }}</span>
          <button @click="increaseQuantity" class="border w-8 h-8 text-lg font-semibold">+</button>
        </div>
      </div>

      <!-- Add to Bag -->
      <div class="flex items-center gap-4">
        <button class="bg-black text-white px-8 py-3 font-medium uppercase tracking-wide"  @click="bagStore.addToBag(product)">
          
          Add to Bag
        </button>
        <span class="text-2xl cursor-pointer"> <i class="pi pi-heart" ></i> </span> 
      </div>
      </div>
    </div>
    </div>
  </div>
  <div class="completeyour-look">
     <div class="header">
        <p class="text-2xl font-bold uppercase text-black mt-10 text-center tracking-wider">
          Complete Your Look
        </p>
      </div>
      <CompleteYourLook />
  </div>
   <div class="similar-style">
     <div class="header">
        <p class="text-2xl font-bold uppercase text-black mt-10 text-center tracking-wider">
          Similar style
        </p>
      </div>
      <SimilarStyle />
  </div>
  <div class="video-subscribe">
    <VideoSubscribe />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router' // <-- add useRouter
import { useBagStore } from '../../stores/bag'
import { useFavoritesStore } from '../../stores/favorites'

import CompleteYourLook from './CompleteYourLook.vue'
import SimilarStyle from './SimilarStyle.vue'
import VideoSubscribe from '../VideoPage/VideoSubscribe.vue'

const route = useRoute()
const router = useRouter() // <-- add this line
const bagStore = useBagStore()
const productData = ref({})
const thumbnails = ref([])
const startIndex = ref(0)
const selectedColor = ref('RED')
const quantity = ref(1)
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
const colors = [
  { name: 'RED', image: '/images/red-hat.png' },
  { name: 'BROWN', image: '/images/brown-hat.png' }
]

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
function increaseQuantity() {
  quantity.value++
}
function decreaseQuantity() {
  if (quantity.value > 1) quantity.value--
}
function goToVideoDetail() {
  router.push({
    name: 'VideoDetail',
    query: { video: productData.value.video }
  })
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
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 10px;
}
</style>
