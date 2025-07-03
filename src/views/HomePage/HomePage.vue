<template>
  <div class="main-body " style="background-color: #FF92C9;" >
    <!-- Responsive Video Section -->
    <div class="video-page mt-2">
      <div class="flex justify-center">
        <video
          class="w-full h-[580px] sm:h-64 md:h-[400px] lg:h-[750px] object-cover"
          autoplay
          muted
          loop
        >
          <source src="/video/Video-header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="showDailyDiscount"
        class="relative small-poster text-center bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 p-2 sm:p-4 md:p-4 lg:p-4 shadow-md mx-auto flex items-center justify-center"
      >
        <span class="absolute right-3 top-2 cursor-pointer text-gray-400 hover:text-pink-500 text-xl font-bold" @click="showDailyDiscount = false">
          &times;
        </span>
        <div class="flex items-center gap-3 justify-center w-full">
          <svg class="w-7 h-7 text-pink-500 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-base sm:text-lg md:text-xl font-semibold text-pink-700 tracking-wide">
            🎉 Daily Deal: <span class="font-bold text-pink-600">10% OFF</span> on all items today only!
          </p>
        </div>
      </div>
    </transition>
    <div class="shop-by-cat">
      <ImageCarousel />
      <!-- Responsive Banner Discount -->
      <div class="banner-discount mt-8 relative">
        <img
          class="w-full h-40 sm:h-64 md:h-[350px] lg:h-[500px] object-cover object-center p-2 sm:p-6 md:p-[1cm] opacity-100"
          src="/images/Banner-Discount.png"
          alt="Banner Discount"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-center uppercase tracking-wider space-y-2 sm:space-y-4"
        >
          <p class="text-white text-lg sm:text-3xl font-bold">don't delay; buy today.</p>
          <p class="text-white text-2xl sm:text-5xl font-bold">summer sale</p>
          <p class="text-white text-3xl sm:text-6xl font-bold">50% percent off</p>
        </div>
      </div>
      <div class="on-sale">
        <p class="text-lg sm:text-4xl font-bold uppercase text-white text-center tracking-wider">
          On sale!!
        </p>
      </div>
      <OnSale />
      <div class="video-subscribe">
        <VideoSubscribe />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ImageCarousel from "./ImageCarousel.vue";
import OnSale from "./OnSale.vue";
import VideoSubscribe from '../VideoPage/VideoSubscribe.vue';

export default {
  components: {  ImageCarousel, OnSale, VideoSubscribe },
  name: "BodyPage",
  setup() {
    const showDailyDiscount = ref(true)
    return { showDailyDiscount }
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>