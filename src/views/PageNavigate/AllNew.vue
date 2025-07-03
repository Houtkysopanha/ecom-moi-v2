<template>
  <div class="py-6 px-2 sm:px-4 md:px-12 ">
     <div class="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 rounded-2xl shadow-lg px-6 py-8 mb-10 overflow-hidden">
      <div class="flex items-center gap-4">
        <svg class="w-14 h-14 text-white drop-shadow-lg animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">🔥 Summer Sale!</h2>
          <p class="text-lg md:text-xl text-white font-semibold">Get <span class="font-bold text-yellow-200">10% OFF</span> on all products today only!</p>
        </div>
      </div>
      <div class="mt-6 md:mt-0">
        <router-link
          to="/"
          class="bg-white text-pink-600 hover:bg-pink-100 font-bold px-8 py-3 rounded-full shadow transition text-lg"
        >
          Shop Now
        </router-link>
      </div>
      <img src="/images/Banner-Discount.png" alt="Discount Banner" class="absolute right-0 bottom-0 w-40 opacity-20 pointer-events-none hidden md:block" />
    </div>
    <h1 class="text-3xl font-bold text-pink-600 mb-8 text-center">All Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      <div
        v-for="(product, index) in visibleProducts"
        :key="index"
        class="product-card transition"
      >
        <div class="m-2 sm:m-4">
          <div class="mb-2">
            <div class="relative mx-auto group">
              <img
                :src="hoveredProduct === product.name ? product.hoverImage : product.image"
                :alt="product.name"
                class="w-full h-52 sm:h-64 md:h-72 lg:h-[500px] object-cover rounded"
                @mouseover="hoveredProduct = product.name"
                @mouseleave="hoveredProduct = null"
                @error="onImageError"
              />
              <!-- Heart Icon -->
              <Tag
                :value="''"
                :icon="product.icon"
                class="absolute"
                style="right: 20px; top: 20px; font-size: 25px; color: white;"
              />
              <!-- Shop Now Button -->
              <router-link
                :to="`/product/${product.name.replace(/\s+/g, '-').toLowerCase()}`"
                class="shop-now-btn absolute bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-xs sm:text-sm flex items-center justify-center"
              >
                Shop Now
              </router-link>
            </div>
          </div>
          <div class="mb-1 font-bold uppercase text-xs sm:text-base text-gray-900">{{ product.name }}</div>
          <div>
            <div class="mt-0 text-base sm:text-lg text-pink-600 font-bold">
              ${{ product.price?.toFixed(2) }}
            </div>
            <div class="color-selector mt-2" v-if="product.colors && product.colors.length">
              <div
                v-for="(color, colorIndex) in product.colors"
                :key="colorIndex"
                class="color-circle"
                :class="{ selected: colorIndex === product.selectedColorIndex }"
                :style="{ backgroundColor: color.code }"
                @click="selectColor(product, colorIndex)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- See More Button -->
    <div v-if="visibleCount < products.length" class="flex justify-center mt-6">
      <button
        class="px-6 py-2 border-2 bg-white border-pink-500 text-black font-semibold hover:bg-pink-600 hover:text-white transition"
        @click="seeMore"
      >
        See More
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Tag from "primevue/tag";

export default {
  name: "AllNew",
  components: { Tag },
  setup() {
    const products = ref([
      {
        name: "Red Hat",
        price: 53.0,
        image: "/images/Onsale1.png",
        hoverImage: "/images/Onsale11.png",
        icon: "pi pi-heart-fill",
        colors: [
          { code: "#9B4C82" },
          { code: "#231F20" },
        ],
        selectedColorIndex: 0,
      },
      {
        name: "Mini Dress Black",
        price: 30,
        image: "/images/Onsale2.png",
        hoverImage: "/images/Onsale22.png",
        icon: "pi pi-heart-fill",
        colors: [
          { code: "#000000" },
          { code: "#F5F5F5" },
        ],
        selectedColorIndex: 0,
      },
      {
        name: "Beige Sandal",
        price: 70,
        image: "/images/Onsale3.png",
        hoverImage: "/images/Onsale33.png",
        icon: "pi pi-heart-fill",
        colors: [
          { code: "#F5DEB3" },
          { code: "#D2B48C" },
        ],
        selectedColorIndex: 0,
      },
      {
        name: "Sandra Scarf",
        price: 40,
        image: "/images/Onsale4.png",
        hoverImage: "/images/Onsale44.png",
        icon: "pi pi-heart-fill",
        colors: [
          { code: "#FFC0CB" },
          { code: "#FFF" },
        ],
        selectedColorIndex: 0,
      },
       {
        name: "Red Hat",
        price: 53.0,
        image: "/images/Onsale1.png",
        hoverImage: "/images/Onsale11.png",
        icon: "pi pi-heart-fill",
        colors: [
          { code: "#9B4C82" },
          { code: "#231F20" },
        ],
        selectedColorIndex: 0,
      },
      {
        name: "Mini Dress Black",
        price: 30,
        image: "/images/Onsale2.png",
        hoverImage: "/images/Onsale22.png",
        icon: "pi pi-heart-fill",
        colors: [
          { code: "#000000" },
          { code: "#F5F5F5" },
        ],
        selectedColorIndex: 0,
      },
      {
        name: "Beige Sandal",
        price: 70,
        image: "/images/Onsale3.png",
        hoverImage: "/images/Onsale33.png",
        icon: "pi pi-heart-fill",
        colors: [
          { code: "#F5DEB3" },
          { code: "#D2B48C" },
        ],
        selectedColorIndex: 0,
      },
      {
        name: "Sandra Scarf",
        price: 40,
        image: "/images/Onsale4.png",
        hoverImage: "/images/Onsale44.png",
        icon: "pi pi-heart-fill",
        colors: [
          { code: "#FFC0CB" },
          { code: "#FFF" },
        ],
        selectedColorIndex: 0,
      },
      // ...add more products as needed
    ]);
    const hoveredProduct = ref(null);

    // Responsive initial visible count
    const getInitialVisible = () => {
      if (window.innerWidth < 640) return 4; // mobile
      if (window.innerWidth < 1024) return 6; // tablet
      return 8; // desktop
    };
    const visibleCount = ref(getInitialVisible());

    window.addEventListener("resize", () => {
      if (visibleCount.value < products.value.length) {
        visibleCount.value = getInitialVisible();
      }
    });

    const visibleProducts = computed(() => products.value.slice(0, visibleCount.value));

    const selectColor = (product, index) => {
      product.selectedColorIndex = index;
    };

    const seeMore = () => {
      visibleCount.value = products.value.length;
    };

    const onImageError = (e) => {
      e.target.src = "/images/placeholder.png";
    };

    return {
      products,
      hoveredProduct,
      selectColor,
      visibleProducts,
      visibleCount,
      seeMore,
      onImageError,
    };
  },
};
</script>

<style scoped>
.color-selector {
  display: flex;
  align-items: center;
  gap: 10px;
}
.color-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border 0.2s;
}
.color-circle.selected {
  border: 5px double white;
}
.shop-now-btn {
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 90%;
  padding: 8px 0;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
}
</style>