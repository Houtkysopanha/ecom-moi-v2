<template>
  <div class="py-6 px-2 sm:px-4 md:px-12 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 mt-10">
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
                class="w-full h-52 sm:h-64 md:h-72 lg:h-[500px] object-cover"
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
          <div class="mb-1 font-bold uppercase text-xs sm:text-base text-pink-500">{{ product.name }}</div>
          <div>
            <div class="mt-0 text-base sm:text-lg text-red-500 ">
              ${{ product.priceDiscount?.toFixed(2) }}
              <span class="text-xs sm:text-sm text-pink-500 line-through">${{ product.price?.toFixed(2) }}</span>
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
  name: "OnSale",
  components: { Tag },
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
      {
        name: "SANDRA SCARF",
        price: 40,
        image: "/images/Onsale4.png",
        hoverImage: "/images/Onsale44.png",
        icon: "pi pi-heart-fill",
        promotionText: "30% Off ",
      },
      {
        name: "SUNGLASSESS",
        price: 40,
        image: "/images/Onsale5.png",
        hoverImage: "/images/Onsale55.png",
        icon: "pi pi-heart-fill",
        promotionText: "30% Off ",
      },
      {
        name: "RED MINI DRESS",
        price: 40,
        image: "/images/Onsale6.png",
        hoverImage: "/images/Onsale66.png",
        icon: "pi pi-heart-fill",
        promotionText: "30% Off ",
      },
      {
        name: "mARIA EARRING",
        price: 40,
        image: "/images/Onsale7.png",
        hoverImage: "/images/Onsale77.png",
        icon: "pi pi-heart-fill",
        promotionText: "30% Off ",
      },
      {
        name: "PINK SKIRT",
        price: 40,
        image: "/images/Onsale8.png",
        hoverImage: "/images/Onsale88.png",
        icon: "pi pi-heart-fill",
        promotionText: "30% Off ",
      },
      {
        name: "SUNGLASSESS1",
        price: 40,
        image: "/images/Onsale5.png",
        hoverImage: "/images/Onsale55.png",
        icon: "pi pi-heart-fill",
        promotionText: "30% Off ",
      },
      {
        name: "RED MINI DRESS2",
        price: 40,
        image: "/images/Onsale6.png",
        hoverImage: "/images/Onsale66.png",
        icon: "pi pi-heart-fill",
        promotionText: "30% Off ",
      },
      {
        name: "mARIA EARRING3",
        price: 40,
        image: "/images/Onsale7.png",
        hoverImage: "/images/Onsale77.png",
        icon: "pi pi-heart-fill",
        promotionText: "30% Off ",
      },
      {
        name: "PINK SKIRT4",
        price: 40,
        image: "/images/Onsale8.png",
        hoverImage: "/images/Onsale88.png",
        icon: "pi pi-heart-fill",
        promotionText: "30% Off ",
      },
    ]);
    const hoveredProduct = ref(null);

    // Responsive initial visible count
    const getInitialVisible = () => {
      if (window.innerWidth < 640) return 4; // mobile
      if (window.innerWidth < 1024) return 6; // tablet
      return 8; // desktop
    };
    const visibleCount = ref(getInitialVisible());

    // Update visibleCount on resize (optional, for better UX)
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