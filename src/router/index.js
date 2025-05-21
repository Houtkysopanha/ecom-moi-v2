import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/Main/MainLayout.vue';
import BodyPage from '../views/HomePage/HomePage.vue';
import ProductDetail from '../views/Product/ProductDetail.vue';
import FavouritePage from '../views/Favorites/FavouritePage.vue';


const routes = [
  {
   path: '/',
   name: 'MainLayout',
   component: MainLayout,
   children: [
    {
      path: '',
      name: 'Home',
      component: BodyPage,
    },
    {
      path: '/products/:productName',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true,
    },
    {
      path: '/favoritesPage',
      name: 'FavoritesPage',
      component: FavouritePage,
    }
   ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
