<template>
  <div class="max-w-5xl mx-auto py-10 px-4">
    <!-- Main Video Player -->
    <div class="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
      <video class="w-full h-full object-cover" controls>
        <source :src="videoSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- Video Info -->
    <div class="mt-6">
      <h1 class="text-3xl font-bold mb-2">Summer Collection Promo</h1>
      <div class="flex items-center text-gray-500 text-sm mb-4">
        <span>By <span class="font-semibold text-black">KANDRA</span></span>
        <span class="mx-2">•</span>
        <span>June 2025</span>
        <span class="mx-2">•</span>
        <span>1,234 views</span>
      </div>
      <p class="text-gray-700 mb-6">
        Discover the latest trends in our Summer Collection! Enjoy exclusive offers and get inspired by our new arrivals. Shop now and elevate your style.
      </p>
      <button class="bg-pink-600 text-white px-6 py-2 rounded font-semibold hover:bg-pink-700 transition">
        Shop Collection
      </button>
    </div>

    <!-- Related Videos -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Related Videos</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="n in 3" :key="n" class="bg-white rounded-lg shadow hover:shadow-lg transition">
          <div class="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
            <img
              :src="`/images/video-thumb${n}.jpg`"
              alt="Related Video"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-1">Promo Video {{ n }}</h3>
            <p class="text-gray-500 text-sm">1,000+ views • 2025</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const videoSrc = route.query.video 
</script>

<style scoped>
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style> 