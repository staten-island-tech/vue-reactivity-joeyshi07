<template>
  <div>
    <div
      class="album-card flex flex-col items-center bg-neutral rounded-lg shadow-lg p-6 m-3 border-solid border border-beige shadow-olive transition-transform hover:scale-105"
    >
      <h2 class="album-title text-soil text-xl">{{ album.title }}</h2>
      <h3 class="album-artist text-soil text-lg">{{ album.artist }}</h3>
      <img
        :src="album.image"
        :alt="album.altText"
        class="w-80 shadow-md bg-white shadow-beige aspect-square object-cover p-4 m-4"
      />
      <h3 class="album-price text-soil text-xl">${{ album.price }}</h3>
      <button
        @click="$emit('add-to-cart', album)"
        class="px-4 py-2 bg-olive text-white text-lg rounded-md mt-2"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: Object,
  },
}
</script>

<style lang="scss" scoped></style>
