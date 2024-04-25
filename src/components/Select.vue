<script setup>
import { ref } from "vue"


const value = ref(null);
defineProps({
  name: String,
  label: String
})

</script>

<template>
  <fieldset class="flex-1 mb-1.5">
    <label :for="name" class="block mb-1 ml-5">{{ label }}</label>
    <div class="relative">
      <select :name="name" :id="name" class="login_input select">
        <slot></slot>
      </select>
      <div class="select_icon absolute top-1/2 -translate-y-1/2 left-6">
        <slot name="icon"></slot>
      </div>
    </div>
  </fieldset>
</template>

<style>
.select {
  appearance: none;
  background: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2215%22 height=%229%22 viewBox=%220 0 15 9%22 fill=%22none%22%3E%0A%3Cpath d=%22M2 2L7.69722 7.69748L13.3833 2.01138%22 stroke=%22%23222222%22 stroke-width=%222.57354%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%0A%3C/svg%3E') no-repeat;
  background-position: calc(100% - 25px) center;
  background-color: #fff;
  max-width: 210px;
  width: 210px;
  /* width: 100%; */
  text-indent: 40px;
}

@media (max-width: 1370px) {
  .select {
    font-size: 18px;
    height: 60px;
    max-width: 200px;
  }
  .select_icon svg{
    width: 24px;
  }
}
</style>
