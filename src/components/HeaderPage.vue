<template>
  <div class="main">
    <div class="header-bar">
      <nav class="bg-white">
        <div class="relative flex items-center justify-between p-4 md:p-8 shadow-md" style="background-color: #FF92C9;">

  <!-- Left Section: Search on desktop, hamburger on mobile -->
  <div class="flex items-center">
    <!-- Mobile Hamburger -->
    <button @click="mobileMenu = !mobileMenu" class="md:hidden text-2xl mr-2">
      <i class="fa-solid fa-bars text-white"></i>
    </button>

    <!-- Desktop Search Bar -->
    <div class="hidden md:block w-[250px]">
      <button
        class="relative flex items-center w-full h-10 text-sm border-2 border-white hover:border-pink-300 px-4 cursor-pointer pl-8"
        @click="showSearchModal = true"
      >
        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3">
          <i class="fa-solid fa-magnifying-glass text-white"></i>
        </div>
        <span v-if="!showSearchModal" class="text-white">Search for...</span>
      </button>
    </div>
  </div>

  <!-- Center Section: KANDRA Logo -->
  <router-link to="/" class="absolute left-1/2 transform -translate-x-1/2">
    <div class="logo">
      <p class="text-4xl text-white font-bold hover:border-b-2">KANDRA</p>
    </div>
  </router-link>

  <!-- Right Section: Icons -->
  <div class="flex items-center gap-2 md:gap-4">
    <i class="fa-solid fa-bag-shopping text-2xl cursor-pointer text-white hover:text-pink-600" @click="showBagDrawer = true"></i>
    <ShoppingBagDrawer :visible="showBagDrawer" @close="showBagDrawer = false" />

    <router-link to="/favoritesPage" class="relative">
      <div class="mx-2">
        <i class="fa-solid fa-heart text-2xl cursor-pointer text-white hover:text-pink-600"></i>
        <span v-if="favoritesCount > 0" class="absolute -top-2 left-[20px] bg-pink-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {{ favoritesCount }}
        </span>
      </div>
    </router-link>

    <i class="fa-solid fa-user text-2xl cursor-pointer text-white hover:text-pink-600" @click="handleUserIconClick"></i>
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
 <aside
    class="relative bg-white w-4/5 max-w-xs h-full shadow-lg transform transition-transform duration-300 ease-in-out p-0"
    :class="mobileMenu ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- Header -->
    <div class="flex items-center justify-between p-4 border-b">
      <span class="text-2xl font-bold text-pink-400">KANDRA</span>
      <button @click="mobileMenu = false">
        <i class="fa-solid fa-xmark text-2xl text-pink-400"></i>
      </button>
    </div>

    <!-- Navigation List -->
    <ul class="p-4 space-y-4">
      <li
        v-for="(menu, idx) in menus"
        :key="menu.title"
        class="relative group"
      >
        <button
          class="font-bold uppercase w-full text-left flex items-center justify-between"
          :class="menu.color"
          @click="toggleMobileMenu(idx)"
        >
          {{ menu.title }}
          <span class="md:hidden ml-2">
            <i :class="activeMobileMenu === idx ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"></i>
          </span>
        </button>

        <!-- Dropdown Content -->
        <div>
          <!-- Mobile dropdown -->
          <div
            v-if="windowWidth < 768 && activeMobileMenu === idx && menu.items"
            class="block w-full border-t-2 border-black bg-white text-black shadow-none z-0"
          >
            <div class="mx-auto grid grid-cols-2 gap-5 p-4">
              <div v-for="(col, cidx) in menu.items" :key="cidx">
                <h3 class="text-sm font-bold uppercase leading-8">{{ col.header }}</h3>
                <router-link
                  v-for="item in col.links"
                  :key="item"
                  :to="getMenuRoute(item)"
                  href="#"
                  class="hover:underline hover:text-pink-400 leading-8 block"
                >
                  {{ item }}
                </router-link>
              </div>
            </div>
          </div>

          <!-- Desktop dropdown -->
          <div
            v-else-if="windowWidth >= 768 && menu.items"
            class="hidden group-hover:block absolute left-0 w-screen border-t-4 border-black bg-white text-black shadow-lg z-50 transition-all"
          >
            <div class="mx-auto grid grid-cols-4 gap-5 p-8">
              <div v-for="(col, cidx) in menu.items" :key="cidx">
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
      </li>
    </ul>
  </aside>

</div>

       <!-- Search Modal -->
<div
  v-if="showSearchModal"
  class="fixed inset-0 flex items-start p-10 justify-center bg-black bg-opacity-40 z-50"
  @click.self="showSearchModal = false"
>
  <div class="bg-white w-full max-w-[75rem] mx-4 rounded-2xl shadow-xl p-6 animate-fadeIn">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-magnifying-glass text-xl text-pink-400"></i>
        <span class="text-xl font-bold text-pink-400">Search</span>
      </div>
      <button @click="showSearchModal = false">
        <i class="fa-solid fa-xmark text-2xl text-white hover:text-pink-400 transition"></i>
      </button>
    </div>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Type to search..."
      class="w-full border border-gray-300 rounded-full px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-pink-300 transition placeholder:text-gray-400"
      autofocus
    />
    <div class="mt-6">
      <p class="text-base font-semibold mb-2 text-gray-700">Suggestions:</p>
      <ul class="space-y-2">
        <li
          v-for="(suggestion, index) in filteredSuggestions"
          :key="index"
          class="cursor-pointer hover:underline hover:text-pink-500 text-pink-400 transition"
          @click="selectSuggestion(suggestion)"
        >{{ suggestion }}</li>
      </ul>
    </div>
  </div>
</div>

        <!-- Register/Login Modal -->
<RegisterForm v-if="showModal" @close="showModal = false" @registered="onRegistered" />
        <!-- Mega Menu -->
        <div class="mega-menu relative w-full hidden md:block text-pink-500 hover:text-pink-600"
          :class="{ 'hidden': mobileMenu, 'block': !mobileMenu }"
        >
          <div class="w-full flex flex-wrap items-start gap-4 md:gap-6 px-4 md:px-8 mt-3">
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
                    <router-link
  v-for="item in col.links"
  :key="item"
  :to="getMenuRoute(item)"
  class="hover:underline hover:text-pink-400 leading-8 block"
>
  {{ item }}
</router-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- Static Menu Item -->
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
      activeMobileMenu: null,
      windowWidth: window.innerWidth,
      suggestions: [
        "New Arrivals", "Best Sellers", "Dresses", "Shoes",
        "Accessories", "Sale Items", "Jackets", "Sweaters"
      ],
      menus: [
        {
          title: "New Arrivals",
          items: [
            {
              header: "Just in",
              links: [
                "All New", "Back in Stock", "New Dresses", "New Top",
                "New Bottom", "New Jacket & Sweater", "New Shoes", "New Accessories"
              ]
            }
          ]
        },
        {
          title: "Bestseller",
          items: [
            {
              header: "Popular Picks",
              links: [
                "All Time Favorites", "Top Rated", "Most Loved", "Editor Picks"
              ]
            }
          ]
        },
        { title: "Clothing" },
        { title: "Accessories" },
        { title: "Shoes" },
        { title: "Sale", color: "text-red-600" },
        { title: "General links", 
          items: [
           {
            header: "General Links",
            links: [
              "Video", "Facebook-Page", "Telegram-Channel", "Instagram-Page", "TikTok-Page"
            ]
           }
          ]
        }
      ],
      getMenuRoute(item) {
  // Map menu item names to routes
  const routeMap = {
    "All New": "/all-new",
    // Add more as needed
  };
  return routeMap[item] || "/";
}
    };
    
  },
  mounted() {
    this.favoritesStore = this.$pinia?._s?.get('favorites') || { favorites: [] };
    window.addEventListener('resize', this.updateWindowWidth);
    
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  },
  methods: {
    toggleMobileMenu(idx) {
      if (this.windowWidth < 768) {
        this.activeMobileMenu = this.activeMobileMenu === idx ? null : idx;
      }
      
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion;
      this.showSearchModal = false;
    },
  handleUserIconClick() {
    const user = localStorage.getItem('user');
    if (user) {
      // If logged in, go to user info page
      this.$router.push('/user-information');
    } else {
      // If not logged in, show modal popup
      this.showModal = true;
    }
  },
  onRegistered() {
    this.showModal = false;
    this.$router.push('/user-information');
  },
  closeMobileMenu() {
  this.mobileMenu = false;
  this.activeMobileMenu = null;
}
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
  }
};
</script>

<style scoped>
/* No additional CSS needed — Tailwind handles layout */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fadeIn {
  animation: fadeIn 0.3s cubic-bezier(.4,0,.2,1);
}
</style>