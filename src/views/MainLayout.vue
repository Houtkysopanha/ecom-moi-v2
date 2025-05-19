<template>
    <div id="app" class=" bg-pink-50">
        <header>
            <HeaderPage />
            <!-- <VideoPage /> -->
        </header>
        <main>
            <router-view />
        </main>
        <footer>
            <FooterPage />
        </footer>

    </div>
</template>
<script>
import HeaderPage from '../components/HeaderPage.vue'
import BodyPage from './BodyPage.vue'
import VideoPage from './VideoPage.vue'
import FooterPage from '../components/FooterPage.vue'
export default{
  components: { HeaderPage, VideoPage, BodyPage, FooterPage },
    name: 'MainLayout',
}
</script>
