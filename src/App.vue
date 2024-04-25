<script setup>
import { RouterView, useRoute } from 'vue-router'
import BackButton from '@/components/BackButton.vue';
import NeedHelp from "@/components/NeedHelp.vue";
import SportSystemIcon from './components/SportSystemIcon.vue';

const route = useRoute();

</script>

<template>
  <div class="content">
    <RouterView />
  </div>
  <template v-if="route.name != 'notfound'" >
    <BackButton link="/" />
    <NeedHelp link="/" />
    <SportSystemIcon />
  </template>
</template>

<style scoped>
.bg {
  position: absolute;
  /* top: 20px;
  left: 30px; */
  width: 100%;
  height: 100%;
  z-index: -10;
  overflow: hidden;
}

.bg svg {
  max-width: 100%;
}
</style>
