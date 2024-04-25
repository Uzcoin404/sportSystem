<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps({
  name: String,
})

</script>

<template>
  <button type="submit" class="checkout_button text-white" @click="router.push('checkout')">
    <div class="flex justify-center">
      <div>
        <p class="tlg:text-base text-sm poppins text-left -mb-1">ÖDƏNİŞ</p>
        <p class="tlg:text-4xl text-2xl font-bold poppins">145AZN</p>
      </div>
      <span class="arrow ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25" viewBox="0 0 14 25" fill="none">
          <path d="M1.45703 23.9028L12.7504 12.5774L1.45703 1.25195" stroke="white" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>
  </button>
</template>

<style scoped>
.checkout_button {
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 360px;
  max-height: 130px;
  width: 100%;
  height: 100%;
  clip-path: polygon(0.016% 12.138%, 0.016% 12.138%, 0.014% 10.256%, 0.126% 8.459%, 0.345% 6.774%, 0.659% 5.231%, 1.06% 3.857%, 1.537% 2.681%, 2.081% 1.731%, 2.682% 1.036%, 3.33% 0.624%, 4.016% 0.523%, 96.299% 9.014%, 96.299% 9.014%, 96.985% 9.242%, 97.624% 9.778%, 98.209% 10.59%, 98.73% 11.648%, 99.178% 12.921%, 99.544% 14.378%, 99.818% 15.989%, 99.991% 17.722%, 100.055% 19.548%, 100% 21.435%, 95.703% 91.145%, 95.703% 91.145%, 95.562% 92.71%, 95.342% 94.166%, 95.051% 95.497%, 94.696% 96.687%, 94.283% 97.722%, 93.822% 98.584%, 93.318% 99.259%, 92.778% 99.73%, 92.211% 99.982%, 91.623% 100%, 5.737% 84.864%, 5.737% 84.864%, 5.176% 84.652%, 4.643% 84.231%, 4.145% 83.616%, 3.687% 82.822%, 3.276% 81.866%, 2.916% 80.763%, 2.614% 79.53%, 2.377% 78.181%, 2.209% 76.733%, 2.117% 75.202%, 0.016% 12.138%);
  background: linear-gradient(98deg, #00C04D 5.98%, #00C472 94.57%);

  /* .checkout_button_content {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */

  .arrow {
    transition: .3s;
  }

  &:hover {
    .arrow {
      background-color: #fff;
    }

    svg path {
      stroke: #00C04D;
    }
  }

}
@media (max-height: 970px) {
  .checkout_button{
    max-width: 300px;
    height: 115px;
    bottom: 40px;
    right: 10px;
  }
}

@media (max-height: 900px) {
  .checkout_button{
    max-width: 270px;
    height: 100px;
  }
}
</style>