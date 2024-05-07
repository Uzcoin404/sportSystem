<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const menuList = [
  'Yeni başlayan',
  'Orta',
  'Peşəkar'
]
const store = useStore();
const suitType = ref(menuList[0]);
const menuText = computed(() => store.state.currentSuit.split(/(?<=[a-z])(?=[A-Z])/));
</script>

<template>
  <div class="absolute left-1/2 -translate-x-1/2 -top-8">
    <div class="pt-7">
      <div class="relative w-max mx-auto">
        <div class="menu_wrapper absolute top-0 left-0 w-full h-full">
          <div class="flex justify-center items-center text-white">
            <template v-for="(item, index) in menuList" :key="item">
              <button id="menuItem" :class="{ 'xl:text-xl text-base font-bold': true, 'active': suitType == item }"
                @click="suitType = item">
                {{ item }}
              </button>
              <div class="menu_col" v-show="index != menuList.length - 1"></div>
            </template>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="710" height="111" viewBox="0 0 710 111" fill="none"
          class="menu_shape">
          <path
            d="M14.4785 28.0041C6.77011 28.2928 1.33228 35.6748 3.34207 43.1222L18.6415 99.8151C20.0545 105.051 24.8037 108.689 30.227 108.689H695.788C702.935 108.689 708.498 102.48 707.716 95.3763L698.711 13.523C698.023 7.26895 692.621 2.60824 686.334 2.8437L14.4785 28.0041Z"
            fill="url(#paint0_linear_444_8)" stroke="white" stroke-width="4" />
          <defs>
            <linearGradient id="paint0_linear_444_8" x1="2" y1="50.5914" x2="706.949" y2="50.5914"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#038410" />
              <stop offset="0.356248" stop-color="#4A8CF0" />
              <stop offset="0.695589" stop-color="#D70000" />
              <stop offset="0.966409" stop-color="#242424" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    <h2 class="absolute -translate-x-1/2 left-1/2 pointer-events-none 2xl:text-3xl xl:text-2xl text-xl font-bold text-center mt-4 capitalize">
      {{ menuText[0] }}: {{ menuText[1] }}
    </h2>
  </div>
</template>

<style scoped>
.menu_col {
  width: 2px;
  height: 66px;
  background-color: #fff;
  margin: 25px 80px 9px;
}

#menuItem.active {
  color: #fff;
}

#menuItem {
  padding: 48px 0 28px;
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 1400px) {
  .menu_shape {
    width: 80%;
  }

  .menu_wrapper {
    max-width: 80%;
  }

  .menu_col {
    margin: 25px 50px 9px;
    height: 50px;
  }

  #menuItem {}
}
</style>