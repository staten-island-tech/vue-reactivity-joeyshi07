<template>
  <div>
    <h2>{{ animal.name }}</h2>
    <img :src="animal.image" alt="" />
  </div>
</template>

<script setup>
defineProps({
  animal: Object,
})
</script>
