<script setup>
import Checkbox from './Checkbox.vue';
import DatePicker from './DatePicker.vue';
import CheckOutButton from "./CheckoutButton.vue"

</script>

<template>
  <section class="total flex-auto">
    <h3 class="total_title pr-10 mb-2.5">HESAB</h3>
    <h5 class="total_subtitle mb-2.5 py-1.5 pr-10">Əsas avadanlıq</h5>
    <div class="">
      <Checkbox name="ski" label="23AZN" class="mb-3.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-3.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-5">
        Xizək
      </Checkbox>
    </div>
    <h5 class="total_subtitle mb-4 py-1.5 pr-10">Geyim</h5>
    <div class="">
      <Checkbox name="ski" label="23AZN" class="mb-3.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-3.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-3.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-5">
        Xizək
      </Checkbox>
    </div>
    <div>
      <h5 class="total_subtitle mb-4 py-1.5 pr-10">Əlavələr</h5>
      <Checkbox name="ski" label="23AZN" class="mb-3.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-3.5">
        Xizək
      </Checkbox>
    </div>
    <DatePicker />
    <CheckOutButton />
  </section>
</template>

<style scoped>
.total {
  max-width: 332px;
}

.total_title {
  font-size: 30px;
  font-weight: 700;
  text-align: right;
}

.total_subtitle {
  font-size: 15px;
  font-weight: 700;
  text-align: right;
  background-color: rgba(34, 34, 34, 0.05);
  border-radius: 5px;
}
</style>