<template>
    <div class="filter-container">
      <button
        v-for="(category, index) in categories"
        :key="index"
        :class="['filter-button', { active: activeCategory === category }]"
        @click="activeCategory = category"
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
  
  <style scoped>
  .filter-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 0.6cm;
  }
  
  .filter-button {
    border: 1px solid #333;
    background-color: white;
    color: #333;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .filter-button.active {
    background-color: #333;
    color: white;
  }
  </style>
  