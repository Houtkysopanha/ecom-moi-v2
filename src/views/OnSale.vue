<template>
    <div class="custom-product-grid-container" style="padding: 0.7cm 3cm 0cm">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 px-12">
        <div v-for="(product, index) in products" :key="index" class="product-card">
          <div class="m-4">
            <div class="mb-2">
              <div class="relative mx-auto group">
                <img
                  :src="hoveredProduct === product.name ? product.hoverImage : product.image"
                  :alt="product.name"
                  class="w-full h-[500px] object-cover"
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
                  class="shop-now-btn absolute bottom-0.5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div class="mb-1 font-bold uppercase">{{ product.name }}</div>
            <div class="">
              <div class="mt-0 text-lg text-red-500">${{ product.priceDiscount?.toFixed(2)  }} <span class=" text-sm text-gray-400 line-through">${{ product.price?.toFixed(2) }}</span></div>
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
  name: "OnSale",
  components: {
    Tag,
  },
  setup() {
    const products = ref([
      {
        name: "red hat",
        price: 53.0,
        priceDiscount: 30.00,
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

    const selectColor = (product, index) => {
      product.selectedColorIndex = index; // Update the selected color index for the product
    };

    return {
      products,
      hoveredProduct,
      selectColor,
    };
  },
};
</script>
  
  <style>
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
  /* left: 10px; */
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
    width: 100%;
    padding: 10px 20px;
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    /* transition: background-color 0.3s ease-in-out; */
  }
  
  </style>