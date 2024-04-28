<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade } from 'swiper/modules';
import SuitFeature from './SuitFeature.vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
</script>

<template>
  <!-- <div class="absolute left-0 bottom-0 w-full"> -->
  <Swiper loop :modules="[Navigation, EffectFade]" :navigation="{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }" :slides-per-view="1" effect="fade" class="product_slider">
    <SwiperSlide>
      <img src="/img/Screen Shot 2024-03-09 at 3.58 1 (2).jpg" alt="" class="product_slider_img">
      <SuitFeature style="top: 5%; left: 48.6%;" />
      <SuitFeature style="top: 12%; left: 48%;" />
      <SuitFeature style="top: 41%; left: 42%;" />
      <SuitFeature style="top: 51%; left: 51%;" />
      <SuitFeature style="top: 59%; left: 12%;" />
      <SuitFeature style="top: 76%; left: 53%;" />
      <SuitFeature style="top: 81%; left: 67%;" />
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

  <!-- </div> -->
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
.swiper-button-prev svg, .swiper-button-next svg{
  width: max-content;
  height: max-content;
}
.swiper-button-prev::after, .swiper-button-next::after{
  display: none;
}

.swiper-button-prev {
  left: 170px;
}

.swiper-button-next {
  right: 445px;
}

@media (max-width: 1350px) {
  .product_slider_img{
    margin-left: -100px;
  }
}
</style>