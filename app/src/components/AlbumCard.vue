<template>
  <div>
    <h2>{{ albums.title }}</h2>
    <h3>{{ albums.artist }}</h3>
    <img :src="albums.image" :alt="albums.altText" />
    <h3>{{ albums.price }}</h3>
  </div>
</template>

<script setup>
import { albums } from './assets/albums.js'
export default {}
</script>
