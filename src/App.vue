<script setup>
import { RouterView, useRoute } from 'vue-router'
import BackButton from '@/components/BackButton.vue';
import NeedHelp from "@/components/NeedHelp.vue";
import SportSystemIcon from './components/SportSystemIcon.vue';

const route = useRoute();

</script>

<template>
  <BackButton link="/" v-show="route.name != 'welcome'" />
  <!-- <svg class="mask" width="0" height="0">
    <defs>
      <clipPath id="bg_shape">
        <path
            d="M50.1542 927.123L0.936307 118.672C-0.0323561 102.761 12.1101 89.0905 28.0245 88.1751L1555.35 0.319696C1591.02 -1.73161 1620.56 27.6369 1618.72 63.3095L1572.11 967.478C1571.3 983.223 1557.98 995.387 1542.22 994.768L59.743 936.507C54.611 936.306 50.4663 932.249 50.1542 927.123Z" />
      </clipPath>
    </defs>
  </svg> -->
  <!-- <div class="bg">
    <svg width="1619" height="995" viewBox="0 0 1619 995" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50.1542 927.123L0.936307 118.672C-0.0323561 102.761 12.1101 89.0905 28.0245 88.1751L1555.35 0.319696C1591.02 -1.73161 1620.56 27.6369 1618.72 63.3095L1572.11 967.478C1571.3 983.223 1557.98 995.387 1542.22 994.768L59.743 936.507C54.611 936.306 50.4663 932.249 50.1542 927.123Z" fill="#fff" />
    </svg>
  </div> -->
  <div class="content">
    <RouterView />
  </div>
  <NeedHelp link="/" v-show="route.name != 'welcome'" />
  <SportSystemIcon v-show="route.name != 'welcome'" />
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
