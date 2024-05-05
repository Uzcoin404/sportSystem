<script setup>

import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade } from 'swiper/modules';
import SuitFeature from './SuitFeature.vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const store = useStore();
const suitSlider = ref(null);
const index = computed(() => store.state.currentSuitIndex)

const positions = [
  [
    {
      top: '17%',
      left: '48.6%',
      type: 'helmet',
    },
    {
      top: '22%',
      left: '48%',
      type: 'glasses',
    },
    {
      top: '49%',
      left: '42%',
      type: 'jacket',
    },
    {
      top: '60%',
      left: '51%',
      type: 'pants',
    },
    {
      top: '65%',
      left: '12%',
      type: 'stick',
    },
    {
      top: '79%',
      left: '53%',
      type: 'shoe',
    },
    {
      top: '83%',
      left: '67%',
      type: 'ski',
    },
  ],
  [
    {
      top: '17%',
      left: '48.6%',
      type: 'helmet',
    },
    {
      top: '22%',
      left: '48%',
      type: 'glasses',
    },
    {
      top: '49%',
      left: '42%',
      type: 'jacket',
    },
    {
      top: '60%',
      left: '51%',
      type: 'pants',
    },
    {
      top: '65%',
      left: '12%',
      type: 'stick',
    },
    {
      top: '79%',
      left: '53%',
      type: 'shoe',
    },
    {
      top: '83%',
      left: '67%',
      type: 'ski',
    },
  ],
  [
    {
      top: '17%',
      left: '48.6%',
      type: 'helmet',
    },
    {
      top: '22%',
      left: '48%',
      type: 'glasses',
    },
    {
      top: '49%',
      left: '42%',
      type: 'jacket',
    },
    {
      top: '60%',
      left: '51%',
      type: 'pants',
    },
    {
      top: '65%',
      left: '12%',
      type: 'stick',
    },
    {
      top: '79%',
      left: '53%',
      type: 'shoe',
    },
    {
      top: '83%',
      left: '67%',
      type: 'ski',
    },
  ],
  [
    {
      top: '17%',
      left: '48.6%',
      type: 'helmet',
    },
    {
      top: '22%',
      left: '48%',
      type: 'glasses',
    },
    {
      top: '49%',
      left: '42%',
      type: 'jacket',
    },
    {
      top: '60%',
      left: '51%',
      type: 'pants',
    },
    {
      top: '65%',
      left: '12%',
      type: 'stick',
    },
    {
      top: '79%',
      left: '53%',
      type: 'shoe',
    },
    {
      top: '83%',
      left: '67%',
      type: 'ski',
    },
  ],
]
</script>

<template>
  <Swiper :modules="[Navigation, EffectFade]" ref="suitSlider" :navigation="{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }" :slides-per-view="1" effect="fade" @realIndexChange="(event) => store.commit('nextSuit', event.activeIndex)" class="product_slider">
    <SwiperSlide>
      <img src="/img/Screen Shot 2024-03-09 at 3.58 1 (2).jpg" alt="" class="product_slider_img">
    </SwiperSlide>
    <SwiperSlide>
      <img src="/img/Mask group.jpg" alt="" class="product_slider_img">
    </SwiperSlide>
    <SwiperSlide>
      <img src="/img/image-from-rawpixel-id-14386361-jpeg 1.jpg" alt="" class="product_slider_img">
    </SwiperSlide>
    <SwiperSlide>
      <img src="/img/Screenshot 2024-03-10 at 09.50 1.jpg" alt="" class="product_slider_img">
    </SwiperSlide>
  </Swiper>
  <template v-for="item in positions[index]" :key="item.type">
    <SuitFeature :type="item.type" @handleFeature="store.commit('updateFeatures', item.type)"
      :style="{ top: item.top, left: item.left }">
      {{ item.type }}</SuitFeature>
  </template>
  <!-- <SuitFeature type="glasses" suit="skiingWoman"
    @handleFeature="store.commit('updateFeatures', 'glasses', 'skiingWoman')" style="top: 12%; left: 48%;">
    Glasses</SuitFeature>
  <SuitFeature type="jacket" suit="skiingWoman" @handleFeature="store.commit('updateFeatures', 'jacket', 'skiingWoman')"
    style="top: 41%; left: 42%;">
    Jacket</SuitFeature>
  <SuitFeature type="pants" suit="skiingWoman" @handleFeature="store.commit('updateFeatures', 'pants', 'skiingWoman')"
    style="top: 51%; left: 51%;">
    Pants</SuitFeature>
  <SuitFeature type="stick" suit="skiingWoman" @handleFeature="store.commit('updateFeatures', 'stick', 'skiingWoman')"
    style="top: 59%; left: 12%;">
    Stick</SuitFeature>
  <SuitFeature type="shoe" suit="skiingWoman" @handleFeature="store.commit('updateFeatures', 'shoe', 'skiingWoman')"
    style="top: 76%; left: 53%;">
    Shoe</SuitFeature>
  <SuitFeature type="ski" suit="skiingWoman" @handleFeature="store.commit('updateFeatures', 'ski', 'skiingWoman')"
    style="top: 81%; left: 67%;">
    Ski</SuitFeature> -->
  <div class="swiper-button-prev">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25" viewBox="0 0 14 25" fill="none">
      <path d="M12.2715 0.897997L0.978152 12.2234L12.2715 23.5488" stroke="black" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="swiper-button-next">
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="25" viewBox="0 0 13 25" fill="none">
      <path d="M0.852539 23.5473L12.1459 12.2219L0.852539 0.896484" stroke="black" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>

</template>

<style scoped>
.product_slider {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: -10;
}

.swiper-slide {
  margin-top: auto;
}

.swiper-button-prev,
.swiper-button-next {
  width: 64px;
  height: 64px;
  top: 60%;
  transform: translateY(-50%);
  border: 1.5px solid #000;
  border-radius: 50%;
}

.swiper-button-prev svg,
.swiper-button-next svg {
  width: max-content;
  height: max-content;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

.swiper-button-prev {
  left: 170px;
}

.swiper-button-next {
  right: 445px;
}

@media (max-width: 1350px) {
  .product_slider_img {
    margin-left: -100px;
  }
}
</style>