<template>
    <div id="app">
        <header>
            <HeaderPage />
            <VideoPage />
        </header>
        <main>
            <BodyPage />
        </main>

    </div>
</template>
<script>
import HeaderPage from '../components/HeaderPage.vue'
import BodyPage from './BodyPage.vue'
import VideoPage from './VideoPage.vue'
export default{
  components: { HeaderPage, VideoPage, BodyPage },
    name: 'MainLayout',
}
</script>