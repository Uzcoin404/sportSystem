<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
})
</script>

<template>
  <img :src=image alt="">
  <p class="font-bold text-sm text-center mt-2.5">
    <slot></slot>
  </p>
</template>

<style scoped>

</style>
