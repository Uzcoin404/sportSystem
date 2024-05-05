<script setup>
import { ref } from "vue"


const value = ref(null);
const isFocused = ref(false);
const props = defineProps({
  name: String,
  label: String,
  value: String
})

</script>

<template>
  <fieldset class="flex-1 mb-1.5">
    <label :for="name" class="block mb-1 ml-5">{{ label }}</label>
    <div :class="{ 'select_wrapper relative': true, 'active': isFocused }">
      <select :name="name" :id="name" class="login_input select">
        <slot></slot>
      </select>
      <div class="select_icon absolute top-1/2 -translate-y-1/2 left-6">
        <slot name="icon"></slot>
      </div>
      <input type="number" class="select_textfield" @focus="isFocused = true" @blur="isFocused = false"
        :value="props.value">
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
  text-indent: 90px;
}

.select_textfield {
  position: absolute;
  top: 50%;
  height: 100%;
  transform: translateY(-50%);
  left: 65px;
  background-color: transparent;
  /* border-top: 1px solid #000; */
  /* border-bottom: 1px solid #000; */
  width: 60px;
  font-size: 23px;
  font-weight: 700;
  text-align: right;
  transition: .3s;
  -moz-appearance: textfield;
  padding-right: 10px;
}

.select_wrapper.active {
  .login_input {
    border-color: transparent;
  }

  .select_textfield {
    left: 0;
    background-color: #fff;
    z-index: 10;
    width: 100%;
    border: 1px solid #fff;
    text-align: center;
    border-radius: 40px;
    padding: 0 30px;
  }

  .select_textfield::-webkit-outer-spin-button,
  .select_textfield::-webkit-inner-spin-button {
    -webkit-appearance: auto;
  }
}

.select_textfield::-webkit-outer-spin-button,
.select_textfield::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

@media (max-width: 1370px) {
  .select {
    font-size: 18px;
    height: 60px;
    max-width: 200px;
  }

  .select_textfield {
    font-size: 18px;
  }

  .select_icon svg {
    width: 24px;
  }
}
</style>
