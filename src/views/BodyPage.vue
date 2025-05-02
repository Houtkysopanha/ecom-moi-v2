<template>
    <div class="main-body">
        <div class="shop-by-cat">
            <div class="header" style="margin-top: 0.8cm;">
                <p class=" text-2xl font-bold uppercase text-center tracking-wider">Shop By Category</p>
            </div>
            <CatFilter />
            <ImageCarousel />
            <div class="text-center">
  <p class="inline-block text-2xl font-medium uppercase tracking-wider border-2 border-black p-3 hover:bg-black hover:text-white transition duration-300 ease-in-out">
    Shop By Category<i class="pi pi-chevron-right" style="font-size: 1.2rem;"></i>
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
          <p class=" text-white text-3xl font-bold">don't delay; but todya.</p>
          <p class=" text-white text-5xl font-bold">summer sale</p>
          <p class="  text-white text-6xl font-bold">50% percents off</p>
        </div>
        
      </div>
        </div>
    </div>
</template>
<script >
import CatFilter from './CatFilter.vue';
import ImageCarousel from './ImageCarousel.vue';
export default {
  components: { CatFilter, ImageCarousel },
  name: "BodyPage",
};

</script>
<style>

</style>