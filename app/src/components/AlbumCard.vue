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
    </div>
  </div>
</template>

<script>
//app.vue --> header
//create list of albums
// put albums on screen --> filter by genre -- computer properties?
// shopping cart - show items
// calculate price
export default {
  props: {
    album: Object,
  },
}
</script>

<style lang="scss" scoped></style>
