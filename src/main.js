import { createApp } from 'vue'
import router from './router'
import './assets/main.css'
import 'flowbite';
import App from './App.vue'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import primevue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Carousel from 'primevue/carousel'
import 'primeicons/primeicons.css';
import { createPinia } from 'pinia';
import  piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(primevue, {
    themes: {
        preset: Aura,
    },
});
app.component('Carousel', Carousel)
app.mount('#app')

