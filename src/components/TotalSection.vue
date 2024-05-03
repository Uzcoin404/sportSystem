<script setup>
import Checkbox from './Checkbox.vue';
import DatePicker from './DatePicker.vue';

</script>

<template>
  <section class="total flex-auto">
    <h3 class="total_title pr-10 tlg:mb-2.5 mb-1">HESAB</h3>
    <h5 class="total_subtitle tlg:mb-2.5 mb-1 py-1.5 pr-10 xl leading-4 tmd:leading-6">Əsas avadanlıq</h5>
    <div class="mr-10">
      <Checkbox type="ski" name="ski" label="23AZN" class="tlg:mb-2.5 mb-1">
        Ski
      </Checkbox>
      <Checkbox type="shoe" name="shoe" label="23AZN" class="tlg:mb-2.5 mb-1">
        Shoe
      </Checkbox>
      <Checkbox type="stick" name="stick" label="23AZN" class="tlg:mb-5 mb-2">
        Stick
      </Checkbox>
    </div>
    <h5 class="total_subtitle tlg:mb-4 mb-2 py-1.5 pr-8 mr-3 leading-4 tmd:leading-6">Geyim</h5>
    <div class="mr-10">
      <Checkbox type="helmet" name="helmet" label="23AZN" class="tlg:mb-2.5 mb-1">
        Helmet
      </Checkbox>
      <Checkbox type="glasses" name="glasses" label="23AZN" class="tlg:mb-2.5 mb-1">
        Glasses
      </Checkbox>
      <Checkbox type="jacket" name="jacket" label="23AZN" class="tlg:mb-2.5 mb-1">
        Jacket
      </Checkbox>
      <Checkbox type="pants" name="pants" label="23AZN" class="tlg:mb-5 mb-2">
        Pants
      </Checkbox>
    </div>
    <h5 class="total_subtitle tlg:mb-4 mb-2 py-1.5 pr-6 mr-5 leading-4 tmd:leading-6">Əlavələr</h5>
    <div class="mr-10">
      <Checkbox name="ski2" label="23AZN" class="tlg:mb-2.5 mb-1">
        Xizək
      </Checkbox>
      <Checkbox name="ski3" label="23AZN" class="tlg:mb-2.5 mb-1">
        Xizək
      </Checkbox>
    </div>
    <DatePicker />
  </section>
</template>

<style>
.total {
  max-width: 332px;
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

@media (max-width: 1300px) {
  .total{
    max-width: 300px;
    margin-right: 24px;
  }
}
@media (max-width: 1100px) {
  .total{
    max-width: 270px;
  }
}
</style>