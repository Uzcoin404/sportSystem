<script setup>

defineProps({
  name: String,
  link: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="flex justify-between">
    <fieldset>
      <label :for="name" class="block mb-1 ml-5">
        <input type="checkbox" :name="name" :id="name">
        Xizək
      </label>
    </fieldset>
    <span class="">23AZN</span>
  </div>
</template>

<style scoped></style>
