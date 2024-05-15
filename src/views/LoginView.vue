<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { formatIncompletePhoneNumber } from "libphonenumber-js"
import Check from "@/components/icons/Check.vue"

const phoneNumber = ref("");
const phoneStatus = ref({ success: false, data: null, submitting: false });

function formatPhoneNumber() {
  try {
    const parsedPhoneNumber = formatIncompletePhoneNumber(phoneNumber.value)
    phoneNumber.value = parsedPhoneNumber;
  } catch (e) {
    console.error('Invalid phone number:', e);
  }
  console.log(phoneNumber);
}

async function submitPhoneNumber() {
  console.log(phoneNumber);
  phoneStatus.value.submitting = true;
  try {
    const response = await fetch(import.meta.env.VITE_APP_API_URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic V2ViRXhjaGFuZ2U6UEBzc3dvcmQwNA==',
        'Operation': 'CheckPhoneNumber',
      },
      body: JSON.stringify({ PhoneNumber: phoneNumber.value }),
    });

    if (!response.ok) {
      const errorData = await response.json();
    } else {
      console.log(response.data);
      if (response.data) {

      }
      phoneStatus.value.success = true;
      this.formData = {
        name: '',
        email: '',
        message: '',
      };
    }
  } catch (error) {
    this.errors.push('Network error occurred.');
  } finally {
    phoneStatus.value.submitting = false;
  }
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
            <input type="text" class="login_input" v-model="phoneNumber" @input="formatPhoneNumber"
              placeholder="+994 (00) 000 0000" required>
            <button class="login_button text-2xl" :disabled="phoneStatus.submitting">
              <Check v-show="phoneStatus.success" class="mr-4" />
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