<template>
    <div class="video-page mt-4" >
      <div class="relative flex justify-center">
        <video class="w-screen h-[420px] object-cover" autoplay muted loop>
          <source
            src="/video/VIdeo-Subscribe.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <!-- Overlay Content -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6"
        >
          <p class="text-5xl font-bold uppercase">Subscribe now to get 10% off</p>
          <p class="text-2xl font-bold uppercase">phone number*</p>
          
            <input
              type="email"
              placeholder="ENTER PHONE NUMBER"
              class=" w-[600px] px-4 py-2  text-black border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
            />
          <button
              class="bg-black w-[200px] text-white p-4 hover:bg-red-600 transition duration-300"
            >
              Subscribe
            </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "VideoPage",
  };
  </script>
  
  <style>
  /* Add any additional styles here if needed */
  </style>