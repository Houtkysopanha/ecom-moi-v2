<template>
  <div class="main-checkout min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
    <!-- Header -->
    <div class="checkout-header">
      
        <h1 class="text-3xl md:text-4xl p-6 font-extrabold bg-white text-pink-500 border-b-4 border-pink-400 text-center shadow-lg rounded-b-2xl tracking-widest">
          Chekout Here!!
        </h1>
    </div>
    <div class="flex flex-col lg:flex-row gap-6 p-2 sm:p-6 max-w-7xl mx-auto">
      <!-- Mobile Tabs -->
      <div class="flex lg:hidden gap-2 mb-2">
        <button
          :class="[
            'flex-1 py-2 rounded-t font-semibold uppercase transition text-xs',
            mobileTab === 'shoppingbag' ? 'bg-white border-b-4 border-pink-500 text-pink-600 shadow' : 'bg-gray-100 text-gray-500'
          ]"
          @click="mobileTab = 'shoppingbag'"
        >
          Shopping Bag
        </button>
        <button
          :class="[
            'flex-1 py-2 rounded-t font-semibold uppercase transition text-xs',
            mobileTab === 'payment' ? 'bg-white border-b-4 border-pink-500 text-pink-600 shadow' : 'bg-gray-100 text-gray-500'
          ]"
          @click="mobileTab = 'payment'"
        >
          Payment Method
        </button>
        <button
          :class="[
            'flex-1 py-2 rounded-t font-semibold uppercase transition text-xs',
            mobileTab === 'detail' ? 'bg-white border-b-4 border-pink-500 text-pink-600 shadow' : 'bg-gray-100 text-gray-500'
          ]"
          @click="mobileTab = 'detail'"
        >
          Detail
        </button>
      </div>
      <!-- Left Side: Detail & Payment -->
      <div class="flex flex-col w-full lg:w-1/2 gap-6">
        <!-- Detail Section -->
        <div v-if="mobileTab === 'detail' || isDesktop">
          <div class="profile-delivery">
            <p class="uppercase text-2xl sm:text-3xl font-bold mb-2 text-pink-600">delivery</p>
            <div class="box flex flex-col sm:flex-row gap-4 sm:gap-7 p-6 bg-white rounded-xl shadow border border-pink-100 my-5">
              <div class="image flex justify-center sm:block">
                <img class="rounded-full w-16 h-16 sm:w-20 sm:h-20 bg-slate-200 border-2 border-pink-200" src="/images/online-shopping.png" alt="" />
              </div>
              <div class="text text-center sm:text-left">
                <p class="text-base sm:text-lg font-semibold text-pink-700">SAN MARIA</p>
                <p class="text-base sm:text-lg font-medium text-gray-600">Phnom Penh</p>
                <p class="text-base sm:text-lg font-medium text-gray-600">099 654 752</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Payment Method Section -->
        <div v-if="mobileTab === 'payment' || isDesktop">
          <div class="payment-method sm:mt-8">
            <p class="uppercase text-2xl sm:text-3xl font-bold mb-4 text-pink-600">payment method</p>
            <div class="flex gap-2 sm:gap-4 mb-4">
              <button
                :class="[
                  'flex-1 px-2 sm:px-6 py-2 rounded-t font-semibold uppercase transition text-xs sm:text-base',
                  paymentTab === 'credit' ? 'bg-white border-b-4 border-pink-500 text-pink-600 shadow' : 'bg-gray-100 text-gray-500'
                ]"
                @click="paymentTab = 'credit'"
              >
                Credit Card
              </button>
              <button
                :class="[
                  'flex-1 px-2 sm:px-6 py-2 rounded-t font-semibold uppercase transition text-xs sm:text-base',
                  paymentTab === 'telegram' ? 'bg-white border-b-4 border-pink-500 text-pink-600 shadow' : 'bg-gray-100 text-gray-500'
                ]"
                @click="paymentTab = 'telegram'"
              >
                Telegram
              </button>
            </div>
            <!-- Credit Card Tab -->
            <div v-if="paymentTab === 'credit'" class="box bg-white rounded-xl shadow border border-pink-100 my-5">
              <div class="title-payment flex flex-col sm:flex-row justify-between items-center bg-pink-50 p-4 border-b border-pink-100 rounded-t-xl">
                <p class="text-base sm:text-lg font-semibold mb-2 sm:mb-0 text-pink-700">Credit Card</p>
                <div class="image flex gap-2">
                  <img src="/images/Visa.png" alt="" class="h-6 sm:h-8" />
                  <img src="/images/Mastercard.png" alt="" class="h-6 sm:h-8" />
                  <img src="/images/UnionPay.png" alt="" class="h-6 sm:h-8" />
                  <img src="/images/JCB.png" alt="" class="h-6 sm:h-8" />
                </div>
              </div>
              <div class="form-input py-4 px-2 sm:px-8">
                <div class="flex flex-col gap-4">
                  <div class="card-number relative">
                    <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <i class="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Card number"
                      class="border border-pink-200 p-3 sm:p-4 w-full placeholder:text-gray-400 font-medium rounded focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                  <div class="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Expiration date(MM/YY)"
                      class="expired-date border border-pink-200 p-3 sm:p-4 w-full placeholder:text-gray-400 font-medium rounded focus:ring-2 focus:ring-pink-400"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      class="cvv border border-pink-200 p-3 sm:p-4 w-full placeholder:text-gray-400 font-medium rounded focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                  <div class="name-card relative">
                    <input
                      type="text"
                      placeholder="Name on card"
                      class="border border-pink-200 p-3 sm:p-4 w-full placeholder:text-gray-400 font-medium rounded focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                  <!-- BANK PAYMENT SECTION -->
                  <div class="bank-use bg-pink-50 p-4 rounded-md border border-pink-100">
                    <p class="text-base sm:text-xl font-semibold mb-4 text-pink-700">Use payment by bank</p>
                    <div class="space-y-3">
                      <label class="flex justify-between items-center border rounded p-3 cursor-pointer bg-white hover:bg-pink-50 transition">
                        <div class="flex items-center gap-3">
                          <input type="radio" name="bank" class="form-radio text-pink-500" />
                          <span class="font-medium">ABA</span>
                        </div>
                        <img src="/images/aba.png" alt="ABA" class="h-6" />
                      </label>
                      <label class="flex justify-between items-center border rounded p-3 cursor-pointer bg-white hover:bg-pink-50 transition">
                        <div class="flex items-center gap-3">
                          <input type="radio" name="bank" class="form-radio text-pink-500" />
                          <span class="font-medium">ACLEDA</span>
                        </div>
                        <img src="/images/ac.png" alt="ACLEDA" class="h-6" />
                      </label>
                      <label class="flex justify-between items-center border rounded p-3 cursor-pointer bg-white hover:bg-pink-50 transition">
                        <div class="flex items-center gap-3">
                          <input type="radio" name="bank" class="form-radio text-pink-500" />
                          <span class="font-medium">WING</span>
                        </div>
                        <img src="/images/wing.png" alt="WING" class="h-6" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Telegram Tab -->
            <div v-if="paymentTab === 'telegram'" class="flex flex-col items-center bg-white rounded-xl shadow border border-pink-100 my-5 p-6 sm:p-8">
              <p class="text-base sm:text-lg font-medium mb-4 text-pink-700">Pay via Telegram</p>
              <a
                href="https://t.me/your_telegram_bot"
                target="_blank"
                class="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-full text-base sm:text-lg transition"
              >
                Open Telegram
              </a>
            </div>
          </div>
        </div>
        <!-- CONTACT LINE, NOTE, PAY BUTTON (always show on detail tab or desktop) -->
        <div v-if="mobileTab === 'detail' || isDesktop" class="contact-line mt-6">
          <p class="uppercase text-2xl sm:text-3xl font-bold text-pink-600">contact line</p>
          <div class="Contact-line bg-white p-4 mt-4 rounded-xl shadow border border-pink-100">
            <div class="flex flex-col sm:flex-row gap-4 mb-4 bg-pink-50 p-4 rounded-md border border-pink-100">
              <label class="flex items-center gap-2">
                <input type="checkbox" class="form-checkbox text-pink-500" />
                <div class="flex items-center gap-1 border p-2 rounded-md bg-white">
                  <i class="fa-solid fa-phone"></i>
                  <span>Phone call</span>
                </div>
              </label>
              <label class="flex items-center gap-2">
                <input type="checkbox" class="form-checkbox text-pink-500" />
                <div class="flex items-center gap-1 border p-2 rounded-md bg-white">
                  <i class="fa-brands fa-telegram" style="color: rgba(42, 171, 238, 1)"></i>
                  <span>Telegram</span>
                </div>
              </label>
              <label class="flex items-center gap-2">
                <input type="checkbox" class="form-checkbox text-pink-500" />
                <div class="flex items-center gap-1 border p-2 rounded-md bg-white">
                  <i class="fa-brands fa-whatsapp" style="color: rgba(37, 211, 102, 1)"></i>
                  <span>Wechat</span>
                </div>
              </label>
            </div>
            <div class="mt-4 bg-pink-50 p-4 rounded-md border border-pink-100">
              <label class="block text-gray-600 text-sm font-medium mb-2">
                Mobile Phone Number
              </label>
              <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                <span class="px-3">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                </span>
                <span class="bg-gray-100 px-3 py-2 text-gray-700 font-medium select-none border-l border-gray-300">
                  (+855)
                </span>
                <input
                  type="text"
                  class="w-full px-3 py-2 outline-none border-none text-gray-800 bg-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="mobileTab === 'detail' || isDesktop" class="Note">
          <p class="uppercase text-2xl sm:text-3xl font-bold mt-4 text-pink-600">note</p>
          <div class="Note mt-4 sm:mt-6">
            <textarea
              class="w-full h-32 sm:h-40 p-3 sm:p-4 border border-pink-200 rounded-md bg-pink-50"
              placeholder="Enter your note here..."
            ></textarea>
          </div>
        </div>
        <div v-if="mobileTab === 'detail' || isDesktop" class="payment-button mt-6">
          <button
            class="w-full bg-black text-white text-base sm:text-xl font-semibold py-3 sm:py-4 uppercase hover:bg-pink-600 transition duration-300 rounded"
            @click="handlePayNow"
          >
            Pay Now
          </button>
          <!-- Success Modal -->
          <div
            v-if="showSuccess"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center">
              <svg class="w-16 h-16 text-pink-500 mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12l2 2 4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              <h2 class="text-2xl font-bold text-pink-600 mb-2">Payment Successful!</h2>
              <p class="text-gray-500 mb-6 text-center">Thank you for your purchase.<br />You can now track your order.</p>
              <router-link
                to="/track-order"
                class="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow transition mb-2 w-full text-center"
              >
                Track Delivery
              </router-link>
              <button
                @click="showSuccess = false"
                class="mt-2 text-pink-500 hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Right Side: Shopping Bag -->
      <div
        class="flex flex-col w-full lg:w-1/2"
        v-if="mobileTab === 'shoppingbag' || isDesktop"
      >
        <p class="uppercase text-2xl sm:text-3xl font-bold mb-4 text-pink-600">my shopping bag</p>
        <div class="bg-white p-4 sm:p-7 border-l-0 lg:border-l-2 border-pink-100 h-full rounded-xl shadow">
          <div v-if="bagStore.bag.length === 0" class="p-8 text-gray-500 text-center">
            Your bag is empty.
          </div>
          <div v-else class="flex flex-col gap-6">
            <div
              v-for="product in bagStore.bag"
              :key="product.name"
              class="flex flex-col sm:flex-row gap-4 items-center border-b pb-4"
            >
              <div class="relative">
                <img
                  class="rounded-xl w-24 h-28 sm:w-32 sm:h-40 object-cover border border-pink-100"
                  :src="product.image"
                  :alt="product.name"
                />
                <span
                  class="absolute -top-2 -right-2 bg-pink-500 text-white font-bold text-xs w-7 h-7 flex items-center justify-center rounded-full shadow"
                >
                  {{ product.quantity }}
                </span>
              </div>
              <div class="flex-1 text-center sm:text-left">
                <p class="text-base sm:text-xl uppercase font-semibold text-pink-700">{{ product.name }}</p>
                <p class="text-xs sm:text-md text-gray-500">RED/FREE SIZE</p>
              </div>
              <div class="text-md font-bold text-pink-600">
                USD ${{ (product.price ?? 0).toFixed(2) }}
              </div>
            </div>
            <!-- Discount code section -->
            <div class="flex flex-col sm:flex-row gap-2 mt-4">
              <input
                type="text"
                placeholder="Discount code"
                class="flex-1 border border-pink-200 px-3 sm:px-4 py-2 text-sm rounded bg-pink-50"
              />
              <button class="bg-pink-500 text-white px-4 sm:px-6 py-2 rounded hover:bg-pink-600 transition">
                Apply
              </button>
            </div>
            <!-- Summary -->
            <div class="text-sm mt-4 space-y-2">
              <div class="flex justify-between">
                <span>Subtotal · {{ bagStore.bag.length }} items</span>
                <span>USD ${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between">
                <span>Delivery fee</span>
                <span>USD ${{ deliveryFee.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between font-bold text-md">
                <span>Total</span>
                <span>USD ${{ total.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useBagStore } from '../../stores/bag'
import { useRouter } from 'vue-router'
const paymentTab = ref('credit')
const mobileTab = ref('shoppingbag') // Show Shopping Bag tab first on mobile
const bagStore = useBagStore()
const windowWidth = ref(window.innerWidth)
const isDesktop = computed(() => windowWidth.value >= 1024)

const showSuccess = ref(false)
const router = useRouter()
function handlePayNow() {
  showSuccess.value = true
}
const subtotal = computed(() =>
  bagStore.bag.reduce((sum, product) => sum + (product.price || 0) * (product.quantity || 1), 0)
)
const deliveryFee = computed(() => (bagStore.bag.length > 0 ? 1.25 : 0)) // Example fee
const total = computed(() => subtotal.value + deliveryFee.value)

function updateWindowWidth() {
  windowWidth.value = window.innerWidth
}
onMounted(() => window.addEventListener('resize', updateWindowWidth))
onBeforeUnmount(() => window.removeEventListener('resize', updateWindowWidth))
</script>