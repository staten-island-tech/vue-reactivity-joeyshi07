<template>
  <div class="bg-white p-4 w-full h-full text-soil font-sans">
    <!-- <span
      ><input
        type="text"
        class="border border-beige rounded-sm p-1 m-3 text-soil"
        placeholder="Enter Promo Code"
    /></span>
    <span
      ><button @click="$emit('promo-code')" class="p-1 bg-sage rounded-sm text-soil">
        Enter
      </button></span
    >
    <p class="text-red-500 mt-2">{{ discountMessage }}</p> -->
    <ul v-if="cartItems.length">
      <li
        v-for="(item, index) in cartItems"
        :key="index"
        class="flex items-baseline justify-between p-2 border-b border-neutral text-soil w-full"
      >
        <span
          ><button class="font-bold text-olive text-2xl mr-4" @click="$emit('remove-one', index)">
            x
          </button></span
        >
        <span class="text-lg mr-3 flex-1 text-left">{{ item.title }} by {{ item.artist }}</span>
        <span class="text-lg">${{ item.price }}</span>
      </li>
    </ul>
    <p v-else class="text-soil">Your cart is empty.</p>

    <div class="mt-4">
      <h3 class="font-semibold mt-2">Items in Cart: {{ numberItems }}</h3>
      <h3 class="font-semibold mt-2">Total Cost: ${{ totalCost.toFixed(2) }}</h3>
      <button @click="$emit('remove-all', album)" class="mt-4 p-2 bg-sage rounded-sm text-soil">
        Remove All
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItems: Array,
    totalCost: Number,
    numberItems: Number,
  },
}
</script>
