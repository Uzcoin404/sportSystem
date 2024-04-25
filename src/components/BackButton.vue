<script setup>
import { RouterLink } from 'vue-router';

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
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
        <path d="M11.3379 0.982422L1.11133 11.209L11.2909 21.3886" stroke="white" />
      </svg>
    </span>
    <span class="text-2xl align-middle">Geri</span>
  </RouterLink>
</template>

<style>
.back_button {
  position: absolute;
  top: 0;
  left: 20px;
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
@media (max-height: 1000px) {
  .back_button{
    top: 10px;
  }
}
</style>
