import { createApp } from 'vue'
import router from './router'
import './assets/main.css'
import 'flowbite';
import App from './App.vue'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App)
app.use(router)
app.mount('#app')

