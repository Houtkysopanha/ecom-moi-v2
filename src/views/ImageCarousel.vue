<template>
  <div class="custom-carousel-container">
    <Carousel
      :value="products"
      :numVisible="numVisible"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      style="padding: 0.7cm 3cm 0cm "
      class="custom-carousel"
    >
      <template #item="slotProps">
        <div class="m-4">
          <div class="mb-2">
            <div class="relative mx-auto">
              <img
  :src="hoveredProduct === slotProps.data.name ? slotProps.data.hoverImage : slotProps.data.image"
  :alt="slotProps.data.name"
  class="w-full h-[500px] object-cover"
  @mouseover="hoveredProduct = slotProps.data.name"
  @mouseleave="hoveredProduct = null"
  @error="onImageError"
/>

              <Tag
                :value="''"
                :icon="slotProps.data.icon"
                class="absolute"
                style="right: 20px; top: 20px; font-size: 25px; color: white;"
              />
            </div>
          </div>
          <div class="mb-1 font-bold uppercase">{{ slotProps.data.name }}</div>
          <div class="">
            <div class="mt-0  text-lg">
              ${{ slotProps.data.price }}
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

<script>
import { ref } from "vue";
import Carousel from "primevue/carousel";
import Button from "primevue/button";
import Tag from "primevue/tag";

export default {
  name: "ImageCarousel",
  components: {
    Carousel,
    Button,
    Tag,
  },

  setup() {
    const products = ref([
  {
    name: "red hat",
    price: 53.00,
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

    const numVisible = ref(4); 
    const hoveredProduct = ref(null); 

    const responsiveOptions = ref([
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ]);
    const selectColor = (product, index) => {
      product.selectedColorIndex = index; // Update the selected color index for the product
    };

    const changeNumVisible = (newNumVisible) => {
      numVisible.value = newNumVisible; // Update the number of visible items
    };

    return {
      products,
      numVisible,
      responsiveOptions,
      hoveredProduct,
      changeNumVisible,
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
</style>