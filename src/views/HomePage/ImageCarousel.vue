<template>
  <div class="custom-carousel-container">
    <Carousel
      :value="products"
      :numVisible="numVisible"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      style="padding: 0.7cm 3cm 0cm"
      class="custom-carousel"
    >
      <template #item="slotProps">
        <div class="m-4 relative">
          <!-- Heart Icon for Wishlist (OUTSIDE router-link) -->
          <span
            class="absolute cursor-pointer z-10"
            style="right: 20px; top: 20px; font-size: 25px;"
            @click.stop="toggleFavorite(slotProps.data)"
          >
            <i
              :class="[
                'pi',
                isFavorite(slotProps.data) ? 'pi-heart-fill text-red-500' : 'pi-heart text-white'
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
                  class="w-full h-[500px] object-cover"
                  @mouseover="hoveredProduct = slotProps.data.name"
                  @mouseleave="hoveredProduct = null"
                  @error="onImageError"
                />
                <!-- Shop Now Button -->
                <button
                  class="shop-now-btn absolute bottom-0.5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </router-link>
          <div class="mb-1 font-bold uppercase">{{ slotProps.data.name }}</div>
          <div>
            <div class="mt-0 text-lg">
              ${{ slotProps.data.price?.toFixed(2) }}
            </div>
            <div class="color-selector mt-2">
              <div
                v-for="(color, index) in slotProps.data.colors"
                :key="index"
                class="color-circle"
                :class="{ selected: index === slotProps.data.selectedColorIndex }"
                :style="{ backgroundColor: color.code }"
                @click="selectColor(slotProps.data, index)"
              ></div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
    colors: [
      { code: "#9B4C82", active: true },
      { code: "#231F20", active: true },
    ],
    selectedColorIndex: 0,
  },
  {
    name: "black jumpsuit",
    price: 30,
    image: "/images/Model-2.png",
    hoverImage: "/images/Model-22.png",
    icon: "pi pi-heart-fill",
  },
  {
    name: "soft plain sweater",
    price: 70,
    image: "/images/Model-3.png",
    hoverImage: "/images/Model-33.png",
    icon: "pi pi-heart-fill",
  },
  {
    name: "zeller top",
    price: 40,
    image: "/images/Model-4.png",
    hoverImage: "/images/Model-44.png",
    icon: "pi pi-heart-fill",
  },
  {
    name: "Product 5",
    price: 40,
    image: "/images/blue-t-shirt.jpg",
    hoverImage: "/images/blue-t-shirt-hover.jpg",
    icon: "pi pi-heart-fill",
  },
]);

const hoveredProduct = ref(null);
const numVisible = ref(4);

const responsiveOptions = ref([
  { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
  { breakpoint: "768px", numVisible: 2, numScroll: 1 },
  { breakpoint: "560px", numVisible: 1, numScroll: 1 },
]);

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