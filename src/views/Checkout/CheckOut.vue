<template>
  <div class="main-checkout">
    <div class="checkout-header">
      <router-link to="/">
        <h1
          class="text-5xl p-4 font-bold bg-white text-pink-500 border-0 border-b-4 border-black text-center"
        >
          KANDRA
        </h1>
      </router-link>
    </div>
    <div class="flex gap-4 p-4 bg-white">
      <!-- Right Side Column Placeholder -->
       <div class="flex flex-col w-1/2">
        <div class="profile-delivery">
          <p class="uppercase text-3xl font-bold">delivery</p>
          <div class="box flex gap-7 p-8 bg-gray-100 rounded-md my-5">
            <div class="image">
              <img
                class="rounded-full w-20 h-20 bg-slate-400"
                src="/images/online-shopping.png"
                alt=""
              />
            </div>
            <div class="text">
              <p class="text-lg font-medium">SAN MARIA</p>
              <p class="text-lg font-medium">Phnom Penh</p>
              <p class="text-lg font-medium">099 654 752</p>
            </div>
          </div>
        </div>

        <div class="payment-method">
          <p class="uppercase text-3xl font-bold">payment-method</p>
          <div class="box bg-gray-100 rounded-md my-5">
            <div
              class="title-payment flex justify-between items-center bg-white p-4 border-2 border-gray-500"
            >
              <p class="text-lg font-medium">Credit Card</p>
              <div class="image flex gap-2">
                <img src="/images/Visa.png" alt="" />
                <img src="/images/Mastercard.png" alt="" />
                <img src="/images/UnionPay.png" alt="" />
                <img src="/images/JCB.png" alt="" />
              </div>
            </div>

            <div class="form-input py-4 px-8">
              <div class="flex flex-col gap-4">
                <div class="card-number relative">
                  <span
                    class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <i class="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Card number"
                    class="border-2 border-none p-4 w-full placeholder:text-gray-400 font-medium"
                  />
                </div>
                <div class="flex gap-4">
                  <input
                    type="text"
                    placeholder="Expiration date(MM/YY)"
                    class="expired-date border-2 border-none p-4 w-full placeholder:text-gray-400 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    class="cvv border-2 border-none p-4 w-full placeholder:text-gray-400 font-medium"
                  />
                </div>
                <div class="name-card relative">
                  <input
                    type="text"
                    placeholder="Name on card"
                    class="border-2 border-none p-4 w-full placeholder:text-gray-400 font-medium"
                  />
                </div>

                <!-- BANK PAYMENT SECTION -->
                <div class="bank-use bg-white p-4 rounded-md border">
                  <p class="text-xl font-semibold mb-4">Use payment by bank</p>
                  <div class="space-y-3">
                    <label
                      class="flex justify-between items-center border rounded p-3 cursor-pointer"
                    >
                      <div class="flex items-center gap-3">
                        <input
                          type="radio"
                          name="bank"
                          class="form-radio text-pink-500"
                        />
                        <span class="font-medium">ABA</span>
                      </div>
                      <img
                        src="/images/aba.png"
                        alt="ABA"
                        class="h-6"
                      />
                    </label>
                    <label
                      class="flex justify-between items-center border rounded p-3 cursor-pointer"
                    >
                      <div class="flex items-center gap-3">
                        <input
                          type="radio"
                          name="bank"
                          class="form-radio text-pink-500"
                        />
                        <span class="font-medium">ACLEDA</span>
                      </div>
                      <img
                        src="/images/ac.png"
                        alt="ACLEDA"
                        class="h-6"
                      />
                    </label>
                    <label
                      class="flex justify-between items-center border rounded p-3 cursor-pointer"
                    >
                      <div class="flex items-center gap-3">
                        <input
                          type="radio"
                          name="bank"
                          class="form-radio text-pink-500"
                        />
                        <span class="font-medium">WING</span>
                      </div>
                      <img
                        src="/images/wing.png"
                        alt="WING"
                        class="h-6"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- CONTACT LINE SECTION -->
        <div class="contact-line">
          <p class="uppercase text-3xl font-bold">CONTACT LINE</p>
          <div class="Contact-line bg-gray-100 p-4 mt-6 rounded-md">
            <div class="flex gap-4 mb-4 bg-white p-4 rounded-md border">
              <label class="flex items-center gap-2">
                <input type="checkbox" class="form-checkbox text-pink-500" />
                <div class="flex items-center gap-1 border p-2 rounded-md">
                  <i class="fa-solid fa-phone"></i>
                  <span>Phone call</span>
                </div>
              </label>
              <label class="flex items-center gap-2">
                <input type="checkbox" class="form-checkbox text-pink-500" />
                <div class="flex items-center gap-1 border p-2 rounded-md">
                  <i
                    class="fa-brands fa-telegram"
                    style="color: rgba(42, 171, 238, 1)"
                  ></i>
                  <span>Telegram</span>
                </div>
              </label>
              <label class="flex items-center gap-2">
                <input type="checkbox" class="form-checkbox text-pink-500" />
                <div class="flex items-center gap-1 border p-2 rounded-md">
                  <i
                    class="fa-brands fa-whatsapp"
                    style="color: rgba(37, 211, 102, 1)"
                  ></i>
                  <span>Wechat</span>
                </div>
              </label>
            </div>
            <div class="mt-4 bg-white p-4 rounded-md">
              <label class="block text-gray-600 text-sm font-medium mb-2">
                Mobile Phone Number
              </label>
              <div
                class="flex items-center border border-gray-300 rounded-lg overflow-hidden"
              >
                <span class="px-3">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                </span>
                <span
                  class="bg-gray-100 px-3 py-2 text-gray-700 font-medium select-none border-l border-gray-300"
                >
                  (+855)
                </span>

                <input
                  type="text"
                  class="w-full px-3 py-2 outline-none border-none text-gray-800"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="Note">
          <p class="uppercase text-3xl font-bold mt-4">NOTE</p>
          <div class="Note mt-6">
            <textarea
              class="w-full h-40 p-4 border border-gray-300 rounded-md"
              placeholder="Enter your note here..."
            ></textarea>
          </div>
        </div>
        <div class="payment-button mt-6">
          <button
            class="w-full bg-black text-white text-xl font-semibold py-4 uppercase hover:bg-pink-600 transition duration-300"
          >
            Pay Now
          </button>

        </div>
      </div>
      <div class="flex flex-col w-1/2">
       <div class="bg-gray-100 p-7 border-l-2 border-gray-300 h-full">
          <p class="uppercase text-3xl font-bold mb-4">My Shopping Bag</p>

          <div v-if="bagStore.bag.length === 0" class="p-8 text-gray-500">
            Your bag is empty.
          </div>

          <div v-else class="flex flex-col gap-6">
            <div
              v-for="product in bagStore.bag"
              :key="product.name"
              class="flex gap-4 items-center border-b pb-4"
            >
              <div class="relative">
                <img
                  class="rounded w-32 h-40 object-cover"
                  :src="product.image"
                  :alt="product.name"
                />
                <span
                  class="absolute -top-2 -right-2 bg-black opacity-70 text-white font-bold text-xs w-7 h-7 flex items-center justify-center rounded-full"
                >
                  {{ product.quantity }}
                </span>
              </div>
              <div class="flex-1">
                <p class="text-xl uppercase font-semibold">{{ product.name }}</p>
                <p class="text-xs font-md text-gray-500">RED/FREE SIZE</p>
              </div>
              <div class="text-md font-bold">
                USD ${{ (product.price ?? 0).toFixed(2) }}
              </div>
            </div>

            <!-- Discount code section -->
            <div class="flex gap-2 mt-4">
              <input
                type="text"
                placeholder="Discount code"
                class="flex-1 border px-4 py-2 text-sm rounded"
              />
              <button class="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
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
import { computed } from 'vue'
import { useBagStore } from '../../stores/bag'

const bagStore = useBagStore()

const subtotal = computed(() =>
  bagStore.bag.reduce((sum, product) => sum + (product.price || 0) * (product.quantity || 1), 0)
)
const deliveryFee = computed(() => (bagStore.bag.length > 0 ? 1.25 : 0)) // Example fee
const total = computed(() => subtotal.value + deliveryFee.value)
</script>