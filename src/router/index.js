import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/MainLayout.vue';
import BodyPage from '../views/BodyPage.vue';
import ProductDetail from '../views/ProductDetail.vue';


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
    }
   ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
