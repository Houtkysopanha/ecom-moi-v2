import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/Main/MainLayout.vue'
import BodyPage from '../views/HomePage/HomePage.vue'
import VideoDetail from '../views/VideoPage/VideoDetail.vue'

// Lazy-loaded route components
const ProductDetail = () => import('../views/Product/ProductDetail.vue')
const FavouritePage = () => import('../views/Favorites/FavouritePage.vue')
const CheckOut = () => import('../views/Checkout/CheckOut.vue')
const UserInformation = () => import('../views/UserInformation/UserInformation.vue') // <-- Add this
const AllNew = () => import('../views/PageNavigate/AllNew.vue') // 
const TrackOrder = () => import('../views/Checkout/TrackDelivery.vue') // <-- Add this

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
      },
      {
        path: '/user-information',
        name: 'UserInformation',
        component: UserInformation,
      },
      {
        path: '/all-new',
        name: 'AllNew',
        component: AllNew,
      },
      {
        path: '/track-order',
        name: 'TrackOrder',
        component: TrackOrder,
        meta: {hideHeader: true} // <-- Add this meta property
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router