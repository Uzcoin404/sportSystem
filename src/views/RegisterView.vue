<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { parsePhoneNumber, format } from "libphonenumber-js"
import Check from "@/components/icons/Check.vue"
import ButtonShape from "@/components/icons/ButtonShape.vue"

const phoneNumber = ref("");
const status = ref({ success: false, data: null });
console.log();

function formatPhoneNumber() {
  console.log(phoneNumber);
  try {
    const parsedPhoneNumber = parsePhoneNumber(phoneNumber.value, 'AZ')
    phoneNumber.value = format(parsedPhoneNumber);
  } catch (e) {
    console.error('Invalid phone number:', e);
  }
}

function submitPhoneNumber() {
  status.value.success = true;
}
</script>

<template>
  <main class="reg_main h-full flex justify-center items-center">
    <div>
      <h2 class="login_title mb-7">SportSystem-ə xoş qəlmiziniz!</h2>
      <p class="font-medium mb-4">
        Adətən istifadə edəcəyim avadanlığ
      </p>
      <form action="#" @submit.prevent="submitPhoneNumber">
        <div class="flex mb-7 gap-x-16">
          <label for="tool" class="radio_control">
            <input type="radio" name="tool" id="tool">
            Xizək
          </label>
          <label for="tool2" class="radio_control">
            <input type="radio" name="tool" id="tool2">
            Qar lövhəsi
          </label>
        </div>
        <div class="flex flex-wrap gap-4 mb-4">
          <fieldset>
            <label for="phone" class="block mb-1 ml-2.5">Ad</label>
            <input type="text" class="login_input" v-model="phoneNumber" placeholder="Jon" required>
          </fieldset>
          <fieldset>
            <label for="phone" class="block mb-1 ml-2.5">Soyad</label>
            <input type="text" class="login_input" placeholder="Dow" required>
          </fieldset>
        </div>
        <div class="flex flex-wrap gap-4 mb-4">
          <fieldset>
            <label for="phone" class="block mb-1 ml-2.5">Ad</label>
            <input type="text" class="login_input" placeholder="+994 (00) 000 0000" required>
          </fieldset>
          <fieldset>
            <label for="phone" class="block mb-1 ml-2.5">Soyad</label>
            <input type="text" class="login_input" placeholder="+994 (00) 000 0000" required>
          </fieldset>
        </div>
        <div class="flex flex-wrap gap-4">
          <div class="flex-1">
            <label for="gender1" class="block mb-4 ml-2.5">Cinsiniz</label>
            <fieldset class="flex gap-x-9">
              <label for="gender1" class="radio_control">
                <input type="radio" name="gender" id="gender1">
                Kişi
              </label>
              <label for="gender2" class="radio_control">
                <input type="radio" name="gender" id="gender2">
                Qadın
              </label>
              <label for="gender3" class="radio_control">
                <input type="radio" name="gender" id="gender3">
                Başqa
              </label>
            </fieldset>
          </div>
          <fieldset class="flex-1">
            <label for="date" class="block mb-1 ml-2.5">Doğum tarixi</label>
            <input type="date" class="login_input date_input w-full" name="date" id="date" required>
          </fieldset>
        </div>
        <button type="submit" class="relative flex justify-center mx-auto mt-6">
          <div class="absolute flex items-center text-white text-2xl font-bold pt-6">
            <Check class="mr-3" />
            Qeydiyyat
          </div>
          <ButtonShape />
        </button>
      </form>
    </div>
  </main>
</template>

<style scoped>
.radio_control {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 23px;
  font-weight: bold;
}

.radio_control input {
  width: 40px;
  height: 40px;
  cursor: pointer;
  accent-color: #222;
}

.date_input {
  color: rgba(189, 189, 189, 1);
}
.date_input:focus {
  color: #222;
}
</style>