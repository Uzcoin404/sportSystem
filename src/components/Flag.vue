<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
})
</script>

<template>
  <RouterLink :to="link">
    <img :src=image alt="">
    <p class="font-bold text-sm text-center mt-2.5">
      <slot></slot>
    </p>
  </RouterLink>
</template>

<style scoped></style>
