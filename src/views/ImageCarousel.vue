<template>
  <div class="custom-carousel-container">
    <Carousel
      :value="products"
      :numVisible="numVisible"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      style="padding: 0.7cm 1.5cm"
      class="custom-carousel"
    >
      <template #item="slotProps">
        <div class="m-4">
          <div class="mb-2">
            <div class="relative mx-auto">
              <img
                :src="
                  'https://primefaces.org/cdn/primevue/images/product/' +
                  slotProps.data.image
                "
                :alt="slotProps.data.name"
                class="w-full h-[450px] object-cover"
              />
              <Tag
                :value="''"
                :icon="slotProps.data.icon"
                :severity="getSeverity(slotProps.data.icon)"
                class="absolute"
                style="right: 20px; top: 20px; font-size: 25px; color: white;"
              />
            </div>
          </div>
          <div class="mb-2 font-medium uppercase">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-medium text-lg">
              ${{ slotProps.data.price }}
            </div>
            <span>
              <Button
                icon="pi pi-heart"
                severity="secondary"
                outlined
                @click="changeNumVisible(2)"
              />
              <Button
                icon="pi pi-shopping-cart"
                class="ml-2"
                @click="changeNumVisible(3)"
              />
            </span>
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
        name: "Product 1",
        price: 50,
        image: "bamboo-watch.jpg",
        icon: "pi pi-heart-fill ",
      },
      {
        name: "Product 2",
        price: 30,
        image: "black-watch.jpg",
        icon: "pi pi-heart-fill ",
      },
      {
        name: "Product 3",
        price: 70,
        image: "blue-band.jpg",
        icon: "pi pi-heart-fill ",
      },
      {
        name: "Product 4",
        price: 40,
        image: "blue-t-shirt.jpg",
        icon: "pi pi-heart-fill ",
      },
      {
        name: "Product 5",
        price: 40,
        image: "blue-t-shirt.jpg",
        icon: "pi pi-heart-fill ",
      },
    ]);

    const numVisible = ref(4); // Default number of visible items

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

    const getSeverity = (status) => {
      switch (status) {
        case "INSTOCK":
          return "success";
        case "LOWSTOCK":
          return "warning";
        case "OUTOFSTOCK":
          return "danger";
        default:
          return null;
      }
    };

    const carouselRef = ref(null);

    return {
      products,
      numVisible,
      responsiveOptions,
      getSeverity,

      carouselRef,
    };
  },
};
</script>

<style></style>
