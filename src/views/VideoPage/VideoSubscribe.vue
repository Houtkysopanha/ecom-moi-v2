<template>
  <div class="video-page mt-4">
    <div class="relative flex justify-center">
      <video class="w-full h-48 sm:h-72 md:h-[420px] object-cover" autoplay muted loop>
        <source
          src="/video/VIdeo-Subscribe.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <!-- Overlay Content -->
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4 px-2"
      >
        <p class="text-xl sm:text-3xl md:text-5xl font-bold uppercase text-center">Subscribe now to get 10% off</p>
        <p class="text-base sm:text-xl md:text-2xl font-bold uppercase text-center">phone number*</p>
        <input
          type="email"
          placeholder="ENTER PHONE NUMBER"
          class="w-full max-w-xs sm:max-w-md md:max-w-lg px-4 py-2 text-black border border-pink-300 focus:outline-none focus:ring-1 focus:ring-pink-600 rounded"
        />
        <button
          class="bg-white text-black  border-2 border-pink-600 w-full max-w-[180px] py-2 sm:py-3 rounded hover:bg-pink-600 hover:text-white transition duration-300"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoSubscribe",
};
</script>