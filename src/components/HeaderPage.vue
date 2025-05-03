<template>
  <div class="main">
    <div class="header-bar">
      <nav>
        <div class="search flex mx-auto flex-wrap items-center justify-between" style="padding: 1cm;">
          <div class="relative hidden md:block">
            <button
              class="relative flex items-center w-70 h-10 text-sm border-2 border-black px-4"
              style="padding-left: 1cm"
            >
              <div
                style="padding-left: 0.3cm"
                class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <span class="text-gray-400">Search for...</span>
            </button>
          </div>
          <div class="logo" style="margin-right: 3.5cm">
            <p class="text-4xl text-pink-400 font-bold">KANDRA</p>
          </div>
          <div class="icon-nav flex items-center justify-between">
            <div>
              <i class="fa-solid fa-bag-shopping text-2xl"></i>
            </div>
            <div class="mx-10">
              <i
                class="fa-solid fa-heart text-2xl"
                style="margin: 0 0.5cm 0 0.5cm"
              ></i>
            </div>
            <div>
  <i
    class="fa-solid fa-user text-2xl cursor-pointer"
    @click="showModal = true"
  ></i>
</div>

          </div>
        </div>

       <!-- Modal Wrapper -->
  <div
    v-if="showModal"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    @click.self="showModal = false"
  >
    <!-- Transition container -->
    <transition name="slide-fade" mode="out-in">
      <div
        :key="isLogin"
        class="bg-white w-[1000px] h-[660px] flex transition-all duration-500 ease-in-out"
        :class="{ 'flex-row-reverse': !isLogin }"
      >
        <!-- Video Column -->
        <div class="w-1/2">
          <transition name="fade" mode="out-in">
            <video
              :key="isLogin ? 'login-video' : 'register-video'"
              class="w-full h-full object-cover rounded-md"
              autoplay
              muted
              loop
            >
              <source
                :src="isLogin ? loginVideo : registerVideo"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </transition>
        </div>

        <!-- Form Column -->
        <div class="w-1/2 p-6">
          <!-- Toggle Tabs -->
          <div class="register-form flex space-x-4 cursor-pointer">
            <h2
              @click="isLogin = true"
              class="text-xl font-bold mb-4"
              :class="{
                'text-pink-700 border-b-4 border-pink-700': isLogin,
                'text-pink-300': !isLogin
              }"
            >
              LOGIN
            </h2>
            <h2
              @click="isLogin = false"
              class="text-xl font-bold mb-4"
              :class="{
                'text-pink-700 border-b-4 border-pink-700': !isLogin,
                'text-pink-300': isLogin
              }"
            >
              REGISTER
            </h2>
          </div>

          <!-- Login or Register Form -->
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label
                for="phoneNumber"
                class="block text-lg mb-2 font-medium text-gray-600"
              >Mobile number</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter your phone number"
                v-model="form.phoneNumber"
                class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300"
                required
              />
            </div>

            <div v-if="!isLogin" class="mb-4">
              <label
                for="email"
                class="block text-lg mb-2 font-medium text-gray-600"
              >Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                v-model="form.email"
                class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300"
                required
              />
            </div>

            <div class="mb-10">
              <label
                for="password"
                class="block text-lg mb-2 font-medium text-gray-600"
              >Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                v-model="form.password"
                class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300"
                required
              />
            </div>

            <button
              type="submit"
              class="px-4 w-full text-lg font-bold py-2 bg-pink-600 text-white hover:bg-pink-500"
            >
              {{ isLogin ? 'LOGIN' : 'REGISTER' }}
            </button>

            <!-- Extra Options -->
            <div class="text-form">
              <p class="text-center mt-3 text-gray-600 font-medium">
                Don't remember your password ?
              </p>

              <div class="flex items-center my-4">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="px-4 text-gray-600 font-semibold">OR</span>
                <div class="flex-grow border-t border-gray-300"></div>
              </div>

              <div class="icon-instead flex justify-center mb-5">
                <i class="fa-brands fa-facebook text-4xl mx-2" style="color: #1d8de2;"></i>
                <i class="fa-brands fa-telegram text-4xl mx-2" style="color: #74C0FC;"></i>
              </div>

              <p class="text-center mt-3 text-gray-500 font-medium">
                New to KANDRA?
                <span class="text-pink-300 cursor-pointer" @click="isLogin = false">
                  Register now
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>

        <div class="mega-menu" style="margin-top: 0.4cm">
          <div class="relative w-full flex justify-start items-center" style="padding: 0cm 1cm;">
            <!-- Mega menu here -->
            <div class="group">
              <button class="font-bold uppercase">New Arrivals</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-4 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                  <div class="flex flex-col">
                    <h3 class="text-sm font-bold uppercase leading-8">
                      Just in
                    </h3>
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >All New</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >Back in Stock</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Dresses</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Top</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Bottom</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Jacket & Sweater</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Shoes</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New New Accessories</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="group" style="margin-left: 1.5cm;">
              <button class="font-bold uppercase">bestseller</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-4 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                  <div class="flex flex-col">
                    <h3 class="text-sm font-bold uppercase leading-8">
                      Just in
                    </h3>
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >All New</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >Back in Stock</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Dresses</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Top</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Bottom</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Jacket & Sweater</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Shoes</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New New Accessories</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="group" style="margin-left: 1.5cm;">
              <button class="font-bold uppercase">clothing</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-4 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                <!-- write list down -->
                </div>
              </div>
            </div>
            <div class="group" style="margin-left: 1.5cm;">
              <button class="font-bold uppercase">Accessories</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-4 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                <!-- write list down -->
                </div>
              </div>
            </div>

            <div class="group" style="margin-left: 1.5cm;">
              <button class="font-bold uppercase">shoes</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-4 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                <!-- write list down -->
                </div>
              </div>
            </div>

            <div class="group" style="margin-left: 1.5cm;">
              <button class="font-bold uppercase text-red-600">sale</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-4 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                <!-- write list down -->
                </div>
              </div>
            </div>


          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      showModal: true,
      isLogin: true,
      form: {
        phoneNumber: "",
        email: "",
        password: "",
      },
      loginVideo: "../../public/video/Video-register.mp4", 
    registerVideo: "../../public/video/Video-register.mp4", 
    };
  },
  methods: {
    submitForm() {
      if (this.isLogin) {
        console.log("Logging in:", this.form);
      } else {
        console.log("Registering:", this.form);
      }
      this.showModal = false;
    },
  },
};
</script>

<style>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
