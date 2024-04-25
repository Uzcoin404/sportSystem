<script setup>
defineProps({
  name: String,
  label: String,
})
</script>

<template>
  <div class="flex justify-between">
    <fieldset>
      <label :for="name" class="checkbox_field flex items-center">
        <input type="checkbox" :name="name" :id="name" class="checkbox mr-1.5">
        <slot></slot>
      </label>
    </fieldset>
    <span class="checkbox_label">{{ label }}</span>
  </div>
</template>

<style>
.checkbox_field,
.checkbox_label {
  font-size: 17px;
  font-weight: 700;
  color: #D3D3D3;
}

.checkbox {
  width: 27px;
  height: 27px;
  accent-color: #d3d3d3;
  background-color: transparent;
}
</style>
