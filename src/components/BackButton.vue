<script setup>
import { RouterLink } from 'vue-router';
import LeftArrow from './icons/LeftArrow.vue';

defineProps({
  link: {
    type: String,
    required: false
  },
})
</script>

<template>
  <RouterLink :to="link" class="back_button">
    <span class="arrow">
      <LeftArrow />
    </span>
    <span class="text-2xl align-middle">Geri</span>
  </RouterLink>
</template>

<style scoped>

.back_button{
  position: absolute;
  top: 25px;
  left: 55px;
  display: flex;
  align-items: center;
  color: #fff;
}
.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-right: 12px;
}
</style>
