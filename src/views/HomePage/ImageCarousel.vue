<template>
  <div class="custom-carousel-container">
    <!-- Category Tabs -->
     <div class="header mt-8 text-white ">
        <p class="text-lg sm:text-4xl font-bold uppercase text-center tracking-wider">
          Shop By Category
        </p>
      </div>
    <div class="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-center mt-10 overflow-x-auto px-2">
      <button
        v-for="(category, index) in categories"
        :key="index"
        @click="activeCategory = category"
        :class="[
          'border font-bold px-4 py-2 whitespace-nowrap transition',
          activeCategory === category
            ? 'bg-pink-500 text-white border-pink-500'
            : 'bg-white text-black border-pink-500 hover:bg-pink-100'
        ]"
      >
        {{ category }}
      </button>
    </div>
    <!-- Carousel -->
    <Carousel
      :value="filteredProducts"
      :numVisible="numVisible"
      :numScroll="4"
      :responsiveOptions="responsiveOptions"
      class="custom-carousel bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 mt-10"
      :style="{ padding: '0.7cm 1.5rem 0cm' }"
    >
      <template #item="slotProps">
        <div class="relative m-2 sm:m-4">
          <!-- Heart Icon for Wishlist -->
          <span
            class="absolute cursor-pointer z-10 right-3 top-3 sm:right-5 sm:top-5 text-xl sm:text-2xl"
            @click.stop="toggleFavorite(slotProps.data)"
          >
            <i
              :class="[
                'pi',
                isFavorite(slotProps.data) ? 'pi-heart-fill text-pink-400' : 'pi-heart text-white'
              ]"
            ></i>
          </span>
          <router-link
            :to="{
              name: 'ProductDetail',
              params: { productName: slotProps.data.name },
              query: { data: JSON.stringify(slotProps.data) }
            }"
          >
            <div class="mb-2">
              <div class="items relative mx-auto group">
                <img
                  :src="hoveredProduct === slotProps.data.name ? slotProps.data.hoverImage : slotProps.data.image"
                  :alt="slotProps.data.name"
                  class="w-full h-56 sm:h-72 md:h-[400px] lg:h-[500px] object-cover transition"
                  @mouseover="hoveredProduct = slotProps.data.name"
                  @mouseleave="hoveredProduct = null"
                  @error="onImageError"
                />
                <!-- Shop Now Button -->
                <button
                  class="shop-now-btn absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-xs sm:text-sm px-3 py-1"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </router-link>
          <div class="mb-1 font-bold uppercase text-xs sm:text-base text-pink-500">{{ slotProps.data.name }}</div>
          <div>
            <div class="mt-0 text-sm sm:text-lg text-pink-500">
              ${{ slotProps.data.price?.toFixed(2) }}
            </div>
            <div class="color-selector mt-2" v-if="slotProps.data.colors">
              <div
                v-for="(color, index) in slotProps.data.colors"
                :key="index"
                class="color-circle"
                :class="{ selected: index === slotProps.data.selectedColorIndex }"
                :style="{ backgroundColor: color.code }"
                @click.stop="selectColor(slotProps.data, index)"
              ></div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
    <div class="text-center mt-6">
        <p
          class="inline-block text-lg sm:text-2xl font-medium uppercase tracking-wider border-2 bg-white border-pink-400 p-2 sm:p-3 hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out"
        >
          Shop By Category
          <i class="pi pi-chevron-right ml-2" style="font-size: 1.2rem;"></i>
        </p>
      </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Carousel from "primevue/carousel";
import { useFavoritesStore } from "../../stores/favorites.js";

const favoritesStore = useFavoritesStore();

const products = ref([
  {
    name: "red hat",
    price: 53.0,
    image: "/images/Model-RedHat1.png",
    hoverImage: "/images/Model-RedHat2.png",
    icon: "pi pi-heart-fill",
    video: "/video/Video-hat-red.mp4",
    category: "Accessories",
    colors: [
      { code: "#9B4C82" },
      { code: "#231F20" },
    ],
    selectedColorIndex: 0,
  },
  {
    name: "black jumpsuit",
    price: 30,
    image: "/images/Model-2.png",
    hoverImage: "/images/Model-22.png",
    icon: "pi pi-heart-fill",
    category: "Clothing",
  },
  {
    name: "soft plain sweater",
    price: 70,
    image: "/images/Model-3.png",
    hoverImage: "/images/Model-33.png",
    icon: "pi pi-heart-fill",
    category: "Clothing",
  },
  {
    name: "zeller top",
    price: 40,
    image: "/images/Model-4.png",
    hoverImage: "/images/Model-44.png",
    icon: "pi pi-heart-fill",
    category: "BACK IN STOCK",
  },
  {
    name: "Product 5",
    price: 40,
    image: "/images/blue-t-shirt.jpg",
    hoverImage: "/images/blue-t-shirt-hover.jpg",
    icon: "pi pi-heart-fill",
    category: "TOP",
  },
   {
    name: "Product 5",
    price: 40,
    image: "/images/blue-t-shirt.jpg",
    hoverImage: "/images/blue-t-shirt-hover.jpg",
    icon: "pi pi-heart-fill",
    category: "DRESS",
  },
   {
    name: "Product 5",
    price: 40,
    image: "/images/blue-t-shirt.jpg",
    hoverImage: "/images/blue-t-shirt-hover.jpg",
    icon: "pi pi-heart-fill",
    category: "DRESS",
  },
   {
    name: "Product 5",
    price: 40,
    image: "/images/blue-t-shirt.jpg",
    hoverImage: "/images/blue-t-shirt-hover.jpg",
    icon: "pi pi-heart-fill",
    category: "BEST SELLER",
  },
]);

const categories = ref([
  "NEW ARRIVAL",
  ...Array.from(new Set(products.value.map(p => p.category).filter(Boolean)))
]);
const activeCategory = ref("NEW ARRIVAL");

const hoveredProduct = ref(null);
const numVisible = ref(4);

const responsiveOptions = ref([
  { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
  { breakpoint: "768px", numVisible: 2, numScroll: 1 },
  { breakpoint: "560px", numVisible: 1, numScroll: 1 },
]);

const filteredProducts = computed(() => {
  if (activeCategory.value === "NEW ARRIVAL") return products.value;
  return products.value.filter(p => p.category === activeCategory.value);
});

function selectColor(product, index) {
  product.selectedColorIndex = index;
}

function toggleFavorite(product) {
  if (favoritesStore.isFavorite(product)) {
    favoritesStore.removeFavorite(product);
  } else {
    favoritesStore.addFavorite(product);
  }
}

function isFavorite(product) {
  return favoritesStore.isFavorite(product);
}

function onImageError(event) {
  event.target.src = "/images/placeholder.png";
}
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
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px 20px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
</style>