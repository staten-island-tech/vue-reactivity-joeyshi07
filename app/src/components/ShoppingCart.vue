<template>
  <div class="shopping-cart bg-gray-100 p-4 w-1/4 h-full">
    <h2 class="text-lg font-bold">Shopping Cart</h2>
    <ul v-if="cartItems.length">
      <li v-for="(item, index) in cartItems" :key="index" class="flex justify-between p-2 border-b">
        <span>{{ item.title }} by {{ item.artist }}</span>
        <span>${{ item.price }}</span>
      </li>
    </ul>
    <p v-else class="text-gray-500">Your cart is empty.</p>
  </div>
</template>

<script>
//add emit buttons for both remove one and remove all

export default {
  props: {
    cartItems: Array,
  },
}
</script>
