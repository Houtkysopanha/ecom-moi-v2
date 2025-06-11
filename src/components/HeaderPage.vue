<template>
  <div class="main">
    <div class="header-bar">
      <nav>
        <div class="search flex mx-auto flex-wrap items-center justify-between p-8">
          <div class="relative hidden md:block">
            <button
              class="relative flex items-center w-[300px] h-10 text-sm border-2 border-black px-4 cursor-pointer pl-8"
              @click="showSearchModal = true"
            >
              <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <span v-if="!showSearchModal" class="text-gray-400">Search for...</span>
            </button>
          </div>
          <router-link to="/">
            <div class="logo mr-36">
              <p class="text-4xl text-pink-400 font-bold">KANDRA</p>
            </div>
          </router-link>
          <div class="icon-nav flex items-center gap-8">
            <i class="fa-solid fa-bag-shopping text-2xl cursor-pointer" @click="showBagDrawer = true"></i>
            <ShoppingBagDrawer :visible="showBagDrawer" @close="showBagDrawer = false" />
            <router-link to="/favoritesPage" class="relative">
              <div class="mx-10">
                <i class="fa-solid fa-heart text-2xl mx-2"></i>
                <span
                  v-if="favoritesCount > 0"
                  class="absolute -top-2 left-[75px] bg-pink-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                  style="font-size: 12px;"
                >{{ favoritesCount }}</span>
              </div>
            </router-link>
            <i class="fa-solid fa-user text-2xl cursor-pointer" @click="showModal = true"></i>
          </div>
        </div>

        <!-- Search Modal -->
        <div v-if="showSearchModal" class="fixed inset-0 flex items-start bg-white bg-opacity-50 z-50" @click.self="showSearchModal = false">
          <div class="bg-white w-full h-[400px] rounded-lg">
            <div class="search flex mx-auto flex-wrap items-center justify-between p-8">
              <i @click="showSearchModal = false" class="fa-solid fa-xmark cursor-pointer text-2xl w-[300px]"></i>
              <div class="logo mr-36">
                <p class="text-4xl text-pink-400 font-bold">KANDRA</p>
              </div>
              <div class="icon-nav flex items-center gap-8">
                <i class="fa-solid fa-bag-shopping text-2xl"></i>
                <i class="fa-solid fa-heart text-2xl mx-2"></i>
                <i class="fa-solid fa-user text-2xl cursor-pointer" @click="showModal = true"></i>
              </div>
            </div>
            <div class="w-[800px] mx-auto">
              <input type="text" v-model="searchQuery" placeholder="Type to search..." class="w-full border-2 border-black px-3 py-2" />
              <div class="mt-4">
                <p class="text-lg font-semibold mb-2">Suggestions:</p>
                <ul class="space-y-2">
                  <li
                    v-for="(suggestion, index) in filteredSuggestions"
                    :key="index"
                    class="cursor-pointer hover:underline text-pink-500"
                    @click="selectSuggestion(suggestion)"
                  >{{ suggestion }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Register/Login Modal -->
        <RegisterForm v-if="showModal" @close="showModal = false" />

     <!-- Mega Menu -->
<div class="mega-menu mt-4 relative w-full">
  <div class="w-full flex flex-wrap items-center gap-6 px-8">
    <div
      v-for="menu in menus"
      :key="menu.title"
      class="relative group"
    >
      <button class="font-bold uppercase" :class="menu.color">{{ menu.title }}</button>

      <!-- DROPDOWN -->
      <div
        v-if="menu.items"
        class="absolute left-0 top-full min-w-[600px] border-t-4 border-black bg-white text-black mt-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50"
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5 p-8">
          <div v-for="(col, idx) in menu.items" :key="idx">
            <h3 class="text-sm font-bold uppercase leading-8">{{ col.header }}</h3>
            <a
              v-for="item in col.links"
              :key="item"
              href="#"
              class="hover:underline hover:text-pink-400 leading-8 block"
            >
              {{ item }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Link -->
    <router-link to="/VideoDetail">
      <button class="font-bold uppercase text-black ml-6">Video</button>
    </router-link>
  </div>
</div>

      </nav>
    </div>
  </div>
</template>

<script>
import ShoppingBagDrawer from "../views/BagShopping/ShoppingBagDrawer.vue";
import RegisterForm from './RegisterForm.vue';

export default {
  name: "HeaderPage",
  components: { ShoppingBagDrawer, RegisterForm },
  data() {
    return {
      showModal: false,
      showSearchModal: false,
      searchQuery: "",
      favoritesStore: null,
      showBagDrawer: false,
      suggestions: [
        "New Arrivals", "Best Sellers", "Dresses", "Shoes", "Accessories", "Sale Items", "Jackets", "Sweaters",
      ],
      menus: [
        {
          title: "New Arrivals",
          items: [
            { header: "Just in", links: ["All New", "Back in Stock", "New Dresses", "New Top", "New Bottom", "New Jacket & Sweater", "New Shoes", "New Accessories"] }
          ]
        },
        {
          title: "Bestseller",
          items: [
            { header: "Just in", links: ["All New", "Back in Stock", "New Dresses", "New Top", "New Bottom", "New Jacket & Sweater", "New Shoes", "New Accessories"] }
          ]
        },
        { title: "Clothing" },
        { title: "Accessories" },
        { title: "Shoes" },
        { title: "Sale", color: "text-red-600" }
      ]
    };
  },
  mounted() {
    this.favoritesStore = this.$pinia._s.get('favorites') || { favorites: [] };
  },
  computed: {
    filteredSuggestions() {
      if (!this.searchQuery) return this.suggestions;
      return this.suggestions.filter(s =>
        s.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    favoritesCount() {
      return this.favoritesStore && this.favoritesStore.favorites
        ? this.favoritesStore.favorites.length
        : 0;
    },
  },
  methods: {
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion;
      this.showSearchModal = false;
    },
  },
};
</script>