<script setup>

import { languages } from '@/config';
import Flag from '@/components/Flag.vue';
import Logo from '@/components/icons/Logo.vue';
</script>

<template>
  <main class="h-full flex justify-center items-center">
    <div>
      <Logo class="mx-auto mb-16"></Logo>
      <div class="flex justify-center gap-4">
        <div class="flag cursor-pointer" v-for="item in languages" :key="item.text">
          <Flag :link="item.code + '/login'" :image=item.image>
            {{ item.text }}
          </Flag>
        </div>
      </div>
    </div>
  </main>
</template>