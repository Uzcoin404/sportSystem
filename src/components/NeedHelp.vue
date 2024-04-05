<script setup>
import { RouterLink } from 'vue-router';
import Notification from './icons/Notification.vue';

defineProps({
  link: {
    type: String,
    required: false
  },
})
</script>

<template>
  <RouterLink :to="link" class="need_help relative flex items-center">
    <div class="absolute flex items-center text-white pl-6">
      <Notification class="mr-2" />
      Need Help?
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="286" height="66" viewBox="0 0 286 66" fill="none">
      <path
        d="M2.66894 46.7656L0.675339 11.5016C0.34215 5.60794 5.15984 0.709671 11.0582 0.945105L281.564 11.7424C284.736 11.869 286.504 15.4646 284.666 18.0542L264.6 46.3296C261.045 51.3379 255.387 54.4356 249.253 54.7314L23.6004 65.6135C12.6321 66.1424 3.28875 57.7291 2.66894 46.7656Z"
        fill="#01C151" />
    </svg>
  </RouterLink>
</template>

<style scoped>
.need_help{
  position: absolute;
  bottom: 8%;
  padding-left: 3%;
  font-size: 17px;
  font-weight: 500;
}
</style>