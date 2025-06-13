<template>
  <div class="main-body">
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
    <div class="shop-by-cat">
      <div class="header mt-8">
        <p class="text-lg sm:text-2xl font-bold uppercase text-center tracking-wider">
          Shop By Category
        </p>
      </div>
      <CatFilter />
      <ImageCarousel />
      <div class="text-center mt-6">
        <p
          class="inline-block text-lg sm:text-2xl font-medium uppercase tracking-wider border-2 border-black p-2 sm:p-3 hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          Shop By Category
          <i class="pi pi-chevron-right ml-2" style="font-size: 1.2rem;"></i>
        </p>
      </div>
      <!-- Responsive Banner Discount -->
      <div class="banner-discount mt-8 relative">
        <img
          class="w-full h-40 sm:h-64 md:h-[350px] lg:h-[500px] object-cover object-center p-2 sm:p-6 md:p-[1cm] opacity-90"
          src="/images/wing.png"
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
        <p class="text-lg sm:text-2xl font-bold uppercase text-red-600 text-center tracking-wider">
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
import CatFilter from "./CatFilter.vue";
import ImageCarousel from "./ImageCarousel.vue";
import OnSale from "./OnSale.vue";
import VideoSubscribe from '../VideoPage/VideoSubscribe.vue';

export default {
  components: { CatFilter, ImageCarousel, OnSale, VideoSubscribe },
  name: "BodyPage",
};
</script>

<style>
.product-card .promotion-text {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>