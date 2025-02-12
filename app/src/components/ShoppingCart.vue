<template>
  <div class="bg-gray-100 p-4 w-full h-full">
    <h2 class="text-lg font-bold">Shopping Cart</h2>
    <ul v-if="cartItems.length">
      <li v-for="(item, index) in cartItems" :key="index" class="flex justify-between p-2 border-b">
        <span>{{ item.title }} by {{ item.artist }}</span>
        <span>${{ item.price }}</span>
        <button @click="$emit('remove-item', index)" class="text-red-500 text-sm">Remove</button>
      </li>
    </ul>
    <p v-else class="text-gray-500">Your cart is empty.</p>
    <button @click="$emit('remove-all')" class="mt-4 text-red-500">Remove All</button>
  </div>
</template>

<script>
export default {
  props: {
    cartItems: Array,
  },
}
</script>
