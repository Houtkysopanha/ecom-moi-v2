<template>
    <div class="video-page" style="margin-top: 0.3cm; padding: 0cm 1cm;">
        <div class="flex justify-center">
      <video class="w-screen h-[650px] object-cover"  autoplay muted loop>
        <source
          src="/video/Video-header.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
</template>
<script>
export default {
    name: "VideoPage",
}
</script>
<style>

</style>