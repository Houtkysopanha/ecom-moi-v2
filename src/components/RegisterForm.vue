<template>
  <div
    v-if="showModal"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    @click.self="showModal = false"
  >
    <transition name="slide-fade" mode="out-in">
      <div
        :key="isLogin"
        class="bg-white w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:w-[1000px] h-auto md:h-[660px] flex flex-col md:flex-row transition-all duration-500 ease-in-out rounded-lg overflow-hidden"
        :class="{ 'md:flex-row-reverse': !isLogin }"
      >
        <!-- Video Column (hidden on mobile) -->
        <div class="hidden md:block md:w-1/2 h-48 md:h-full">
          <transition name="fade" mode="out-in">
            <video
              :key="isLogin ? 'loginVideo' : 'registerVideo'"
              class="w-full h-full object-cover"
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
        <div class="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
          <!-- Toggle Tabs -->
          <div class="register-form flex space-x-4 cursor-pointer justify-center mb-4">
            <h2
              @click="isLogin = true"
              class="text-lg sm:text-xl font-bold"
              :class="{
                'text-pink-700 border-b-4 border-pink-700': isLogin,
                'text-pink-300': !isLogin
              }"
            >
              LOGIN
            </h2>
            <h2
              @click="isLogin = false"
              class="text-lg sm:text-xl font-bold"
              :class="{
                'text-pink-700 border-b-4 border-pink-700': !isLogin,
                'text-pink-300': isLogin
              }"
            >
              REGISTER
            </h2>
          </div>

          <!-- Login or Register Form -->
          <form @submit.prevent="submitForm" class="space-y-3">
            <!-- Register Fields -->
            <div v-if="!isLogin">
              <div class="flex flex-col sm:flex-row gap-3">
                <div class="w-full sm:w-1/2">
                  <label for="firstName" class="block text-base mb-1 font-medium text-gray-600">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter first name"
                    v-model="form.firstName"
                    class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300 rounded"
                    required
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label for="lastName" class="block text-base mb-1 font-medium text-gray-600">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter last name"
                    v-model="form.lastName"
                    class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300 rounded"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-3">
                <div class="w-full sm:w-1/2">
                  <label for="gender" class="block text-base mb-1 font-medium text-gray-600">Gender</label>
                  <input
                    type="text"
                    id="gender"
                    placeholder="Enter your gender"
                    v-model="form.gender"
                    class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300 rounded"
                    required
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label for="dob" class="block text-base mb-1 font-medium text-gray-600">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    v-model="form.dob"
                    class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300 rounded"
                    required
                  />
                </div>
              </div>
              <div>
                <label for="phoneNumber" class="block text-base mb-1 font-medium text-gray-600">Mobile number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  v-model="form.phoneNumber"
                  class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300 rounded"
                  required
                />
              </div>
              <div>
                <label for="email" class="block text-base mb-1 font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  v-model="form.email"
                  class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300 rounded"
                  required
                />
              </div>
              <div>
                <label for="password" class="block text-base mb-1 font-medium text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  v-model="form.password"
                  class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300 rounded"
                  required
                />
              </div>
            </div>

            <!-- Login Fields -->
            <div v-if="isLogin">
              <label for="email" class="block text-base mb-1 font-medium text-gray-600">Email</label>
              <input
                type="email"
                id="loginEmail"
                placeholder="Enter your email"
                v-model="form.email"
                class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300 rounded"
                required
              />
              <label for="password" class="block text-base mb-1 font-medium text-gray-600">Password</label>
              <input
                type="password"
                id="loginPassword"
                placeholder="Enter your password"
                v-model="form.password"
                class="w-full bg-pink-50 border-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-pink-300 rounded"
                required
              />
            </div>

            <button
              type="submit"
              class="px-4 w-full text-base sm:text-lg font-bold py-2 bg-pink-600 text-white hover:bg-pink-500 rounded"
            >
              {{ isLogin ? 'LOGIN' : 'REGISTER' }}
            </button>

            <!-- Extra Options -->
            <div class="text-form">
              <p v-if="isLogin" class="text-center mt-3 text-gray-600 font-medium text-sm sm:text-base">
                Don't remember your password?
              </p>

              <div class="flex items-center my-4">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="px-4 text-gray-600 font-semibold">OR</span>
                <div class="flex-grow border-t border-gray-300"></div>
              </div>

              <div class="icon-instead flex justify-center mb-5">
                <i class="fa-brands fa-facebook text-3xl sm:text-4xl mx-2" style="color: #1d8de2;"></i>
                <i class="fa-brands fa-telegram text-3xl sm:text-4xl mx-2" style="color: #74C0FC;"></i>
              </div>

              <p v-if="isLogin" class="text-center mt-3 text-gray-500 font-medium text-sm sm:text-base">
                New to KANDRA?
                <span class="text-pink-300 cursor-pointer" @click="isLogin = false">
                  Register now
                </span>
              </p>
              <p v-if="!isLogin" class="text-center mt-3 text-gray-500 font-medium text-sm sm:text-base">
                Already have an account?
                <span class="text-pink-300 cursor-pointer" @click="isLogin = true">
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      isLogin: true,
      form: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        dob: '',
        email: '',
        password: ''
      },
      loginVideo: '/video/Video-register.mp4',
      registerVideo: '/video/Video-register2.mp4',
      showModal: true
    };
  },
  methods: {
    submitForm() {
      if (this.isLogin) {
        // Login: check credentials
        const userData = localStorage.getItem('user');
        if (!userData) {
          alert('No user found. Please register first.');
          return;
        }
        const user = JSON.parse(userData);
        if (
          user.email === this.form.email &&
          user.password === this.form.password
        ) {
          this.$emit('registered');
          this.$emit('close');
        } else {
          alert('Incorrect email or password.');
        }
      } else {
        // Register: save user info
        const user = {
          fullName: this.form.firstName + ' ' + this.form.lastName,
          email: this.form.email,
          phone: this.form.phoneNumber,
          gender: this.form.gender,
          dob: this.form.dob,
          password: this.form.password
        };
        localStorage.setItem('user', JSON.stringify(user));
        this.$emit('registered');
        this.$emit('close');
      }
    }
  }
}
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