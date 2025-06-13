<template>
  <div class="main">
    <div class="header-bar">
      <nav class="bg-white">
        <div class="flex flex-wrap items-center justify-between p-4 md:p-8">
          
          <!-- Mobile Hamburger -->
          <button @click="mobileMenu = !mobileMenu" class="md:hidden text-2xl">
            <i class="fa-solid fa-bars"></i>
          </button>
          
          <!-- Search Bar -->
          <div class="relative hidden md:block w-full md:w-[300px] mb-2 md:mb-0">
            <button
              class="relative flex items-center w-full h-10 text-sm border-2 border-black px-4 cursor-pointer pl-8"
              @click="showSearchModal = true"
            >
              <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <span v-if="!showSearchModal" class="text-gray-400">Search for...</span>
            </button>
          </div>
          
          <!-- Logo -->
          <router-link to="/" class="mx-auto md:mx-0">
            <div class="logo">
              <p class="text-4xl text-pink-400 font-bold">KANDRA</p>
            </div>
          </router-link>
          
          <!-- Icons -->
          <div class="icon-nav flex items-center gap-4 md:gap-8 mt-2 md:mt-0">
            <i class="fa-solid fa-bag-shopping text-2xl cursor-pointer" @click="showBagDrawer = true"></i>
            <ShoppingBagDrawer :visible="showBagDrawer" @close="showBagDrawer = false" />
            
            <router-link to="/favoritesPage" class="relative">
              <div class="mx-2">
                <i class="fa-solid fa-heart text-2xl"></i>
                <span v-if="favoritesCount > 0" class="absolute -top-2 left-[75px] bg-pink-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"> {{ favoritesCount }} </span>
              </div>
            </router-link>
            
            <i class="fa-solid fa-user text-2xl cursor-pointer" @click="showModal = true"></i>
          </div>
        </div>
     <!-- Mobile Sidebar Menu -->
<div
  v-if="mobileMenu"
  class="fixed inset-0 z-50 flex"
>
  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-black bg-opacity-40"
    @click="mobileMenu = false"
  ></div>
  <!-- Sidebar -->
  <!-- Sidebar -->
<aside
  class="relative bg-white w-4/5 max-w-xs h-full shadow-lg transform transition-transform duration-300 ease-in-out p-0"
  :class="mobileMenu ? 'translate-x-0' : '-translate-x-full'"
>
  <div class="flex items-center justify-between p-4 border-b">
    <span class="text-2xl font-bold text-pink-400">KANDRA</span>
    <button @click="mobileMenu = false">
      <i class="fa-solid fa-xmark text-2xl"></i>
    </button>
  </div>
  <ul class="p-4 space-y-4">
    <li v-for="menu in menus" :key="menu.title">
      <button class="font-bold text-left w-full py-2 px-2 rounded hover:bg-pink-50 transition">
        {{ menu.title }}
      </button>
    </li>
    <li>
      <router-link to="/VideoDetail" class="font-bold block py-2 px-2 rounded hover:bg-pink-50 transition">
        Video
      </router-link>
    </li>
  </ul>
</aside>
</div>

        <!-- Search Modal -->
        <div v-if="showSearchModal" class="fixed inset-0 flex items-start bg-white bg-opacity-50 z-50" @click.self="showSearchModal = false">
          <div class="bg-white w-full h-[400px] rounded-lg max-w-3xl mx-auto mt-12 px-4 md:px-8">
            <div class="flex items-center justify-between py-4">
              <i @click="showSearchModal = false" class="fa-solid fa-xmark cursor-pointer text-2xl"></i>
              <div class="logo">
                <p class="text-4xl text-pink-400 font-bold">KANDRA</p>
              </div>
              <div class="icon-nav flex items-center gap-4 md:gap-8">
                <i class="fa-solid fa-bag-shopping text-2xl"></i>
                <i class="fa-solid fa-heart text-2xl"></i>
                <i class="fa-solid fa-user text-2xl cursor-pointer" @click="showModal = true"></i>
              </div>
            </div>
            
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Type to search..." 
              class="w-full border-2 border-black px-3 py-2" 
            />
            
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

        <!-- Register/Login Modal -->
        <RegisterForm v-if="showModal" @close="showModal = false" />

        <!-- Mega Menu -->
        <div class="mega-menu relative w-full hidden md:block"
          :class="{ 'hidden': mobileMenu, 'block': !mobileMenu }"
        >
          <div class="w-full flex flex-wrap items-start gap-4 md:gap-6 px-4 md:px-8">
            <div v-for="menu in menus" :key="menu.title" class="relative group">
              <button class="font-bold uppercase" :class="menu.color">{{ menu.title }}</button>

              <!-- Full-width dropdown -->
              <div
                v-if="menu.items"
                class="fixed left-0 w-full border-t-4 border-black bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50"
                style="min-height: 250px;"
              >
                <div class="mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 p-8 ">
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

            <router-link to="/VideoDetail">
              <button class="font-bold uppercase text-black ml-0 md:ml-6">Video</button>
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
      mobileMenu: false,
      searchQuery: "",
      favoritesStore: null,
      showBagDrawer: false,
      suggestions: ["New Arrivals","Best Sellers","Dresses","Shoes","Accessories","Sale Items","Jackets","Sweaters"],
      menus: [
        {
          title: "New Arrivals",
          items: [{ header: "Just in", links: ["All New","Back in Stock","New Dresses","New Top","New Bottom","New Jacket & Sweater","New Shoes","New Accessories"] }]
        },
        {
          title: "Bestseller",
          items: [{ header: "Just in", links: ["All New","Back in Stock","New Dresses","New Top","New Bottom","New Jacket & Sweater","New Shoes","New Accessories"] }]
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
    }
  },
  methods: {
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion;
      this.showSearchModal = false;
    }
  }
};
</script>

<style scoped>
/* No additional CSS needed—using Tailwind for styling */
</style>
