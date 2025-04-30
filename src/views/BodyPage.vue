<template>
    <div class="main-body">
        <div class="shop-by-cat">
            <div class="header" style="margin-top: 0.8cm;">
                <p class=" text-2xl font-bold uppercase text-center tracking-wider">Shop By Category</p>
            </div>
            <CatFilter />
            <ImageCarousel />
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