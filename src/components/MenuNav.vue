<script setup>
import { ref } from 'vue';
import MenuShapeVue from './icons/MenuShape.vue';
const menuList = [
  'Yeni başlayan',
  'Orta',
  'Peşəkar'
]
const suitType = ref(menuList[0]);

</script>

<template>
  <div class="absolute left-1/2 -translate-x-1/2 -top-8">
    <div class="pt-7">
      <div class="relative w-max mx-auto">
        <div class="absolute top-0 left-0 w-full h-full">
          <div class="flex justify-center items-center text-white">
            <template v-for="(item, index) in menuList" :key="item">
              <button id="menuItem" :class="{ 'pt-12 pb-7 text-xl font-bold': true, 'active': suitType == item }"
                @click="suitType = item">
                {{ item }}
              </button>
              <div class="menu_col" v-show="index != menuList.length - 1"></div>
            </template>
          </div>
        </div>
        <MenuShapeVue />
      </div>
    </div>
    <h2 class="name mt-4">Xizək: Qadın</h2>
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
  color: rgba(255, 255, 255, 0.4);
}

.name {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
}
</style>