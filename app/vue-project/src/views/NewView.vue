<template>
  <div>
    <h2 class="album-title">{{ album.title }}</h2>
    <h3 class="album-artist">{{ album.artist }}</h3>
    <img :src="album.image" :alt="album.altText">
    <h3 class="album-price">{{ album.price}}</h3>
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
    album: Object
  }
};

</script>

<style lang="scss" scoped></style>
