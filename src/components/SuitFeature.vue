<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const props = defineProps(['type', 'suit', 'white', 'reverse']);

const store = useStore();
const featureState = computed(() => store.state[store.state.currentSuit][props.type]);
</script>

<template>
  <div :class="{ 'suit_feature': true, 'active': featureState, 'white': white, 'reverse': reverse }"
    @click="$emit('handleFeature')">
    <div class="suit_feature_icon">
      <svg v-show="!featureState" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
        fill="none">
        <circle cx="16.9446" cy="17.1575" r="14.5221" fill="white" fill-opacity="0.3" stroke="#222222"
          stroke-width="3.49734" />
        <path d="M11.8857 22.2168L22.0047 12.0978" stroke="#222222" stroke-width="3.49734" />
        <path d="M22.0049 22.2168L11.8859 12.0978" stroke="#222222" stroke-width="3.49734" />
      </svg>
      <svg v-show="featureState" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"
        fill="none">
        <circle cx="16.4222" cy="16.6321" r="14.5221" fill="white" fill-opacity="0.3" stroke="#00963D"
          stroke-width="3.49734" />
        <path d="M14.0195 21.6914L24.1385 11.5724" stroke="#00963D" stroke-width="3.49734" />
        <path d="M16.4268 21.6914L10.201 15.4657" stroke="#00963D" stroke-width="3.49734" />
      </svg>
    </div>

    <p class="xl:text-xl font-bold xl:px-4 px-2">
      <slot></slot>
    </p>
  </div>
</template>

<style scoped>
.suit_feature {
  position: absolute;
  display: flex;
  align-items: center;
  color: #222;
  border-radius: 20px;
  cursor: pointer;
  text-transform: capitalize;

  &.reverse {
    flex-direction: row-reverse;
  }

  .suit_feature_icon {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  &.white:not(.active) {
    /* color: #fff; */

    svg * {
      stroke: #fff;
    }
  }

  &.white:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.active.white {
    background-color: rgba(255, 255, 255, 0.4);
  }

  p {
    opacity: 0;
    pointer-events: none;
  }

  p,
  svg {
    transition: .3s;
  }

  &:hover,
  &.active {
    background-color: rgba(34, 34, 34, 0.09);

    p {
      opacity: 1;
      pointer-events: auto;
    }

    svg {
      transform: rotate(45deg);
    }
  }

  &.active {
    color: #00963D;

    svg {
      transform: none;
    }
  }
}
</style>