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
</script>

<template>
  <div :class="{ 'checkbox_wrapper flex justify-between': true, 'checked': checked }">
    <fieldset>
      <label :for="name" class="checkbox_field relative flex items-center cursor-pointer">
        <input type="checkbox" :name="name" :id="name" class="checkbox mr-1.5" :checked="checked" hidden
          @change="store.commit('updateFeatures', props.type)">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 29" fill="none" v-show="checked">
          <circle cx="14.3467" cy="14.5206" r="12.0919" fill="white" fill-opacity="0.3" stroke="#009A3E"
            stroke-width="2.91206" />
          <path d="M12.3477 18.7324L20.7732 10.3068" stroke="#009A3E" stroke-width="2.91206" />
          <path d="M14.3516 18.7324L9.16769 13.5486" stroke="#009A3E" stroke-width="2.91206" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"
          v-show="!checked">
          <circle cx="13.6397" cy="14.0616" r="12.0919" fill="white" fill-opacity="0.3" stroke="#222222"
            stroke-width="2.91206" />
          <path d="M9.42578 18.2734L17.8514 9.84786" stroke="#222222" stroke-width="2.91206" />
          <path d="M17.8516 18.2734L9.42598 9.84786" stroke="#222222" stroke-width="2.91206" />
        </svg>
        <slot></slot>
      </label>
    </fieldset>
    <span class="checkbox_label">{{ label }}</span>
  </div>
</template>

<style scoped>
.checkbox_field,
.checkbox_label {
  font-size: 17px;
  font-weight: 700;
  color: #D3D3D3;
}

.checkbox_wrapper:not(.checked) svg {
  opacity: 0.2;
}

.checkbox_wrapper.checked * {
  color: #009A3E;
}

.checkbox_field svg {
  margin-right: 7px;
}

.checkbox {
  appearance: none;
}
</style>
