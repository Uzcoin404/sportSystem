<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from "vue"

const date = ref(null);
</script>

<template>
  <VueDatePicker v-model="date" :inline="true" :range="true" :min-date="new Date()" :enable-time-picker="false" />
</template>
<style>
:root {
  --dp-menu-min-width: 100%;
}
.dp__main > div:nth-child(2) {
  width: 100%;
}
.dp__theme_light {
  --dp-primary-color: #009A3E;
  --dp-range-between-dates-background-color: rgba(0, 154, 62, 0.2);
  --dp-hover-color: rgba(0, 154, 62, 0.2);
}

.dp__cell_disabled {
  --dp-hover-color: transparent;
  --dp-range-between-dates-background-color: transparent;
  --dp-range-between-border-color: transparent;
  --dp-range-between-dates-text-color: #8e8e8e;
}

.dp__action_row {
  display: none;
}

.dp__calendar_header_item {
  font-weight: 400;
  font-size: 10px;
  width: 25px;
  height: 30px;
  padding: 5px 0 0 0;
}
</style>