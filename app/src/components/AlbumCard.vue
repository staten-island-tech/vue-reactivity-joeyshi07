<template>
  <div>
    <div
      class="album-card bg-white border-2 border-600 rounded-lg shadow-lg p-4 m-3 flex flex-col items-center"
    >
      <h2 class="album-title">{{ album.title }}</h2>
      <h3 class="album-artist">{{ album.artist }}</h3>
      <img
        :src="album.image"
        :alt="album.altText"
        class="w-80 shadow-md shadow-slate-400 aspect-square object-cover m-4"
      />
      <h3 class="album-price">{{ album.price }}</h3>
      <button
        @click="$emit('add-to-cart', album)"
        class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2"
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
  // methods: {
  //    this.$emit('add-to-cart', this.album)
  // }
}
</script>

<style lang="scss" scoped></style>
