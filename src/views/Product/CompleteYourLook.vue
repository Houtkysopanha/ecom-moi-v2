<template>
  <div class="py-6 px-2 sm:px-6 md:px-16">
    <div class="flex flex-wrap gap-4 sm:gap-6 justify-center">
      <div
        v-for="(product, index) in products"
        :key="index"
        class=" transition w-full sm:w-full md:w-[750px] max-w-xs"
      >
        <div class="m-2 sm:m-4">
          <div class="mb-2">
            <div class="relative mx-auto group">
              <img
                :src="hoveredProduct === product.name ? product.hoverImage : product.image"
                :alt="product.name"
                class="w-full h-56 sm:h-72 md:h-80 lg:h-[340px] object-cover "
                @mouseover="hoveredProduct = product.name"
                @mouseleave="hoveredProduct = null"
                @error="onImageError"
              />
              <!-- Dynamic Promotion Text -->
              <div v-if="product.promotionText" class="promotion-text1">
                {{ product.promotionText }}
              </div>
              <!-- Heart Icon -->
              <Tag
                :value="''"
                :icon="product.icon"
                class="absolute"
                style="right: 20px; top: 20px; font-size: 25px; color: white;"
              />
              <!-- Shop Now Button -->
              <button
                class="shop-now-btn absolute bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-xs sm:text-sm"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div class="mb-1 font-bold uppercase text-xs sm:text-base">{{ product.name }}</div>
          <div>
            <div class="mt-0 text-base sm:text-lg text-red-500">
              ${{ product.priceDiscount?.toFixed(2)  }}
              <span class="text-xs sm:text-sm text-gray-400 line-through">${{ product.price?.toFixed(2) }}</span>
            </div>
            <div class="color-selector mt-2">
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
  </div>
</template>

<script>
import { ref } from "vue";
import Tag from "primevue/tag";

export default {
  name: "CompleteYourLook",
  components: {
    Tag,
  },
  setup() {
    const products = ref([
      {
        name: "red hat",
        price: 53.0,
        priceDiscount: 30.0,
        image: "/images/Onsale1.png",
        hoverImage: "/images/Onsale11.png",
        icon: "pi pi-heart-fill",
        promotionText: "Promotion 10% Off",
        colors: [
          { code: "#9B4C82", active: true },
          { code: "#231F20", active: true },
        ],
        selectedColorIndex: 0,
      },
      {
        name: "MINI DRESS BLACK",
        price: 30,
        image: "/images/Onsale2.png",
        hoverImage: "/images/Onsale22.png",
        icon: "pi pi-heart-fill",
        promotionText: "Limited Time Offer",
      },
      {
        name: "bEIGE SANDAL",
        price: 70,
        image: "/images/Onsale3.png",
        hoverImage: "/images/Onsale33.png",
        icon: "pi pi-heart-fill",
        promotionText: "Buy 1 Get 1 Free",
      },
    ]);

    const hoveredProduct = ref(null);

    const selectColor = (product, index) => {
      product.selectedColorIndex = index;
    };

    return {
      products,
      hoveredProduct,
      selectColor,
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
.promotion-text1 {
  position: absolute;
  top: 20px;
  background-color: rgba(255, 255, 255, 1);
  opacity: 0.7;
  color: black;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 5px;
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
}
</style>