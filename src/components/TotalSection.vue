<script setup>
import Checkbox from './Checkbox.vue';
import DatePicker from './DatePicker.vue';

</script>

<template>
  <section class="total flex-auto">
    <h3 class="total_title pr-10 mb-2.5">HESAB</h3>
    <h5 class="total_subtitle mb-2.5 py-1.5 pr-10">Əsas avadanlıq</h5>
    <div class="mr-10">
      <Checkbox name="ski" label="23AZN" class="mb-2.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-2.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-5">
        Xizək
      </Checkbox>
    </div>
    <h5 class="total_subtitle mb-4 py-1.5 pr-8 mr-3">Geyim</h5>
    <div class="mr-10">
      <Checkbox name="ski" label="23AZN" class="mb-2.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-2.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-2.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-5">
        Xizək
      </Checkbox>
    </div>
    <h5 class="total_subtitle mb-4 py-1.5 pr-6 mr-5">Əlavələr</h5>
    <div class="mr-10">
      <Checkbox name="ski" label="23AZN" class="mb-2.5">
        Xizək
      </Checkbox>
      <Checkbox name="ski" label="23AZN" class="mb-2.5">
        Xizək
      </Checkbox>
    </div>
    <DatePicker />
  </section>
</template>

<style scoped>
.total {
  max-width: 332px;
  /* overflow: hidden; */
  padding-top: 20px;
  margin-right: 32px;
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

@media (max-height: 900px) {
  .total_title{
    font-size: 24px;
  }
  .checkbox{
    width: 20px;
  }
}
</style>