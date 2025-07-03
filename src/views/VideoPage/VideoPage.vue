<template>
  <div class="video-page py-4 px-2 md:px-8">
    <div class="max-w-4xl mx-auto w-full">
      <div class="bg-black rounded-lg overflow-hidden shadow-lg h-64 md:h-96 flex items-center justify-center">
        <video
          class="w-full h-full object-cover"
          autoplay
          muted
          loop
          playsinline
        >
          <source src="/video/Video-header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPage",
};
</script>