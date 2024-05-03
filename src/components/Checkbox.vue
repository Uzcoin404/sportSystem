<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const props = defineProps({
  name: String,
  label: String,
  type: String
})

const store = useStore();

const checked = computed(() => store.state[store.state.currentSuit][props.type]);
console.log(store.state.currentSuit);
</script>

<template>
  <div class="flex justify-between">
    <fieldset>
      <label :for="name" class="checkbox_field flex items-center">
        <input type="checkbox" :name="name" :id="name" class="checkbox mr-1.5" :checked="checked"
          @change="store.commit('updateFeatures', props.type)">
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
