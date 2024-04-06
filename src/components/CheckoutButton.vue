<script setup>

defineProps({
  name: String,
})

</script>

<template>
  <button type="submit" class="checkout_button relative text-white">
    <div class="flex justify-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div>
        <p class="poppins text-left -mb-1">ÖDƏNİŞ</p>
        <p class="text-4xl font-bold poppins">145AZN</p>
      </div>
      <span class="arrow ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25" viewBox="0 0 14 25" fill="none">
          <path d="M1.45703 23.9028L12.7504 12.5774L1.45703 1.25195" stroke="white" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="357" height="131" viewBox="0 0 357 131" fill="none">
      <path
        d="M0.0580405 15.7936C-0.700234 7.48998 5.99196 0.401346 14.3254 0.680992L343.541 11.7285C351.926 12.0098 358.141 19.6179 356.743 27.8903L341.413 118.595C340.23 125.597 333.945 130.572 326.858 130.117L20.4649 110.422C13.6517 109.984 8.17225 104.65 7.55139 97.8509L0.0580405 15.7936Z"
        fill="url(#paint0_linear_336_188)" />
      <defs>
        <linearGradient id="paint0_linear_336_188" x1="15.961" y1="18.8546" x2="332.384" y2="142.79"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#00C04D" />
          <stop offset="1" stop-color="#00C472" />
        </linearGradient>
      </defs>
    </svg>
  </button>
</template>

<style scoped>
.checkout_button {

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
</style>