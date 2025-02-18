<template>
  <div class="bg-white p-4 w-full h-full text-soil">
    <ul v-if="cartItems.length">
      <li
        v-for="(item, index) in cartItems"
        :key="index"
        class="flex justify-between p-2 border-b text-soil"
      >
        <span>{{ item.title }} by {{ item.artist }}</span>
        <span>${{ item.price }}</span>
      </li>
    </ul>
    <p v-else class="text-soil">Your cart is empty.</p>

    <div class="mt-4">
      <h3 class="font-semibold">Items in Cart: {{ numberItems }}</h3>
      <h3 class="font-semibold mt-2">Total Cost: ${{ totalCost.toFixed(2) }}</h3>
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
