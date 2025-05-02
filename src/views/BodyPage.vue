<template>
  <div class="main-body">
    <div class="shop-by-cat">
      <div class="header mt-8">
        <p class="text-2xl font-bold uppercase text-center tracking-wider">
          Shop By Category
        </p>
      </div>
      <CatFilter />
      <ImageCarousel />
      <div class="text-center mt-6">
        <p
          class="inline-block text-2xl font-medium uppercase tracking-wider border-2 border-black p-3 hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          Shop By Category
          <i class="pi pi-chevron-right ml-2" style="font-size: 1.2rem;"></i>
        </p>
      </div>
      <div class="banner-discount mt-8 relative">
        <img
          class="w-full h-[500px] object-cover object-center p-[1cm] opacity-90"
          src="/images/Banner-Disc.jpg"
          alt="Banner Discount"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-center uppercase tracking-wider space-y-4"
        >
          <p class="text-white text-3xl font-bold">don't delay; but todya.</p>
          <p class="text-white text-5xl font-bold">summer sale</p>
          <p class="text-white text-6xl font-bold">50% percents off</p>
        </div>
      </div>
      <div class="on-sale">
        <p class="text-2xl font-bold uppercase text-red-600 text-center tracking-wider">
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
import VideoSubscribe from './VideoSubscribe.vue';

export default {
  components: { CatFilter, ImageCarousel, OnSale, VideoSubscribe },
  name: "BodyPage",
};
</script>

<style>
/* Add styles for the small text on the image */
.product-card .promotion-text {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 0, 0, 0.8); /* Red background with transparency */
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>