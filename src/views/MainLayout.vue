<template>
    <div id="app">
        <header>
            <HeaderPage />
            <VideoPage />
        </header>

    </div>
</template>
<script>
import HeaderPage from '../components/HeaderPage.vue'
import VideoPage from './VideoPage.vue'
export default{
  components: { HeaderPage, VideoPage },
    name: 'MainLayout',
}
</script>