import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/MainLayout.vue';
import HeaderPage from '../components/HeaderPage.vue';
import VideoPage from '../views/VideoPage.vue';

const routes = [
  {
   path: '/',
   name: 'MainLayout',
   component: MainLayout,
   children: [
    {
        path: '/HeaderPage',
        name: 'HeaderPage',
        component: HeaderPage
    },
    {
      path: '/VideoPage',
      name: 'VideoPage',
      component: VideoPage
    }
   ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
