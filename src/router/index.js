import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/MainLayout.vue';
import HeaderPage from '../components/HeaderPage.vue';
import VideoPage from '../views/VideoPage.vue';
import BodyPage from '../views/BodyPage.vue';
import CatFilter from '../views/CatFilter.vue';
import FooterPage from '../components/FooterPage.vue';


const routes = [
  {
   path: '/',
   name: 'MainLayout',
   component: MainLayout,
   children: [
    {
        path: 'HeaderPage',
        name: 'HeaderPage',
        component: HeaderPage
    },
    {
      path: 'VideoPage',
      name: 'VideoPage',
      component: VideoPage
    },
    {
      path: 'FooterPage',
      name: 'FooterPage',
      component: FooterPage
    }
   ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
