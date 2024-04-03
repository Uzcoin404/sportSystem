<script setup>
import { RouterView, useRoute } from 'vue-router'
import BackButton from '@/components/BackButton.vue';
import NeedHelp from "@/components/NeedHelp.vue"

const route = useRoute();
</script>

<template>
  <BackButton link="/" v-show="route.name != 'welcome'" />

  <RouterView />

  <NeedHelp link="/" v-show="route.name != 'welcome'" />
</template>

<style scoped></style>
