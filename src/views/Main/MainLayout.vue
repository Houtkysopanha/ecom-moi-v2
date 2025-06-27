<template>
    <div id="app" class=" bg-white">
        <header>
            <!-- <HeaderPage /> -->
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
import HeaderPage from '../../components/HeaderPage.vue'
import BodyPage from '../HomePage/HomePage.vue'
// import VideoPage from '../Video/VideoPage.vue'
import FooterPage from '../../components/FooterPage.vue'
export default{
  components: { HeaderPage, BodyPage, FooterPage },
    name: 'MainLayout',
}
</script>
