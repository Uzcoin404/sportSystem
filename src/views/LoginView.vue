<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { parsePhoneNumber, format } from "libphonenumber-js"
import Check from "@/components/icons/Check.vue"

const phoneNumber = ref("");
const status = ref({ success: false, data: null });

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
  <div id="main">
    <main class="login_main h-full flex justify-center items-center">
      <div>
        <h2 class="login_title mb-12">SportSystem-ə xoş qəlmiziniz!</h2>
        <p class="text-2xl font-medium mb-6">
          Şəxsiyyətinizi təstiq etmək üçün
          aşağıda olan xanalardan birini doldurmanızı
          xahiş edirik
        </p>
        <form action="#" @submit.prevent="submitPhoneNumber">
          <label for="phone" class="mb-1 ml-2.5">Telefon nömrəni</label>
          <div class="flex mb-2">
            <input type="text" class="login_input" v-model="phoneNumber" placeholder="+994 (00) 000 0000" required>
            <button class="login_button text-2xl">
              <Check v-show="status.success" class="mr-4" />
              Yoxla
            </button>
          </div>
        </form>
        <form action="#">
          <label for="phone" class="mb-1 ml-2.5">E-unvan</label>
          <div class="flex">
            <input type="text" class="login_input" placeholder="name@domain.xyz" required>
            <button class="login_button text-2xl">Yoxla</button>
          </div>
        </form>
        <p class="text-2xl font-medium mt-7">Hesabiniz yoxdur?
          <RouterLink to="register" class="font-bold reg_link">Qeydiyyatdan</RouterLink>
          keçin!
        </p>
      </div>
    </main>
  </div>
</template>

<style></style>