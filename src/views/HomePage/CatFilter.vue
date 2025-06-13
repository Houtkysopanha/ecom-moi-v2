<template>
  <div class="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-center mt-4 overflow-x-auto px-2">
    <button
      v-for="(category, index) in categories"
      :key="index"
      @click="activeCategory = category"
      :class="[
        'border font-bold  px-4 py-2 whitespace-nowrap transition',
        activeCategory === category
          ? 'bg-black text-white border-black'
          : 'bg-white text-black border-black hover:bg-pink-100'
      ]"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        'NEW ARRIVAL',
        'BEST SELLER',
        'DRESS',
        'TOP',
        'BOTTOM',
        'BACK IN STOCK',
      ],
      activeCategory: 'NEW ARRIVAL',
    };
  },
};
</script>