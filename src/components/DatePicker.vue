<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from "vue"

const date = ref(null);
</script>

<template>
  <VueDatePicker class="mr-4" v-model="date" :inline="true" :range="true" :min-date="new Date()"
    :enable-time-picker="false" />
</template>
<style>
:root {
  --dp-menu-min-width: 100%;
  --dp-border-radius: 10px;
}

.dp__main>div:nth-child(2) {
  width: 100%;
  margin-right: 32px;
  clip-path: polygon(0 0, 100% 0%, 96% 100%, 0% 100%);
}

.dp__theme_light {
  --dp-background-color: #f5f5f5;
  --dp-text-color: #212121;
  --dp-hover-color: rgba(0, 154, 62, 0.2);
  --dp-hover-text-color: #006E2D;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #009A3E;
  --dp-primary-disabled-color: rgba(0, 154, 62, 0.2);
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-marker-color: #ff6f60;
  --dp-tooltip-color: #fafafa;
  --dp-disabled-color-text: #8e8e8e;
  --dp-highlight-color: rgb(25 118 210 / 10%);
  --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
  --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
  --dp-loader: 5px solid #009A3E;
}

.dp__cell_disabled {
  --dp-hover-color: transparent;
  --dp-hover-text-color: var(--dp-secondary-color);
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