<template>
  <div class="footer text-black py-8 ">

    <div class="grid grid-cols-1 md:grid-cols-5 gap-6 px-12 ">

      <div class="row1 text-start">
        <p class="text-lg font-bold uppercase mb-2">Scan QR Code to Join Telegram</p>

      </div>

      <!-- Row 2: Follow Us -->
      <div class="row2 text-start">
        <p class="text-lg font-bold uppercase mb-2">Follow Us</p>
        <div class="">
        <ul class="space-y-2">
         <li> <a href="#" class="text-blue-500 hover:text-blue-400"><i class="pi pi-facebook text-2xl"></i></a> Facebook</li>
         <li> <a href="#" class="text-blue-400 hover:text-blue-300"><i class="pi pi-twitter text-2xl"></i></a> </li>
         <li> <a href="#" class="text-pink-500 hover:text-pink-400"><i class="pi pi-instagram text-2xl"></i></a></li>
          <li> <a href="#" class="text-red-500 hover:text-red-400"><i class="pi pi-youtube text-2xl"></i></a></li>
        </ul>
        </div>
      </div>

      <!-- Row 3: Customer Services -->
      <div class="row3 text-start">
        <p class="text-lg font-bold uppercase mb-2">Customer Services</p>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Help Center</a></li>
          <li><a href="#" class="hover:underline">Returns</a></li>
          <li><a href="#" class="hover:underline">Shipping Info</a></li>
          <li><a href="#" class="hover:underline">FAQs</a></li>
        </ul>
      </div>

      <!-- Row 4: Contact Us -->
      <div class="row4 text-start">
        <p class="text-lg font-bold uppercase mb-2">Contact Us</p>
        <p>Email: support@example.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>

      <!-- Row 5: We Accept -->
      <div class="row5 text-start">
        <p class="text-lg font-bold uppercase mb-2">We Accept</p>
        <div class="flex justify-center space-x-4">
          <!-- <img src="/images/visa.png" alt="Visa" class="w-12 h-8" />
          <img src="/images/mastercard.png" alt="MasterCard" class="w-12 h-8" />
          <img src="/images/paypal.png" alt="PayPal" class="w-12 h-8" />
          <img src="/images/amex.png" alt="American Express" class="w-12 h-8" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style>

</style>