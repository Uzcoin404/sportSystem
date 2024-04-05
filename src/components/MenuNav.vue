<script setup>
import { RouterLink } from 'vue-router';
import MenuShapeVue from './icons/MenuShape.vue';
const menuList = [
  {
    text: 'Yeni başlayan',
    link: "#"
  },
  {
    text: 'Orta',
    link: "male"
  },
  {
    text: 'Peşəkar',
    link: "abc"
  }
]

</script>

<template>
  <div class="pt-7">
    <div class="relative w-max mx-auto">
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="flex justify-center items-center text-white">
          <template v-for="(item, index) in menuList" :key="item.text">
            <RouterLink :to="item.link" id="menuLink" class="pt-12 pb-7 text-xl font-bold" active-class="active">
              {{ item.text }}
            </RouterLink>
            <div class="menu_col" v-show="index != menuList.length - 1"></div>
          </template>
        </div>
      </div>
      <MenuShapeVue />
    </div>
  </div>
  <h2 class="name mt-4">Xizək: Qadın</h2>
</template>

<style scoped>
.menu_col {
  width: 2px;
  height: 66px;
  background-color: #fff;
  margin: 25px 80px 9px;
}

#menuLink.active {
  color: #fff;
}
#menuLink {
  color: rgba(255, 255, 255, 0.4);
}
.name{
  font-size: 30px;
  font-weight: 700;
  text-align: center;
}
</style>