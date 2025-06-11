import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/Main/MainLayout.vue'
import BodyPage from '../views/HomePage/HomePage.vue'
import VideoDetail from '../views/VideoPage/VideoDetail.vue'

// Lazy-loaded route components
const ProductDetail = () => import('../views/Product/ProductDetail.vue')
const FavouritePage = () => import('../views/Favorites/FavouritePage.vue')
const CheckOut = () => import('../views/Checkout/CheckOut.vue')

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
      },
      {
        path: '/CheckoutPage',
        name: 'CheckoutPage',
        component: CheckOut,
      },
      {
        path: '/VideoDetail',
        name: 'VideoDetail',
        component: VideoDetail
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router