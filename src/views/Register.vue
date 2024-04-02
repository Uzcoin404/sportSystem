<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import BackButton from '@/components/BackButton.vue';
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
  <main class="h-full flex justify-center items-center">
    <div>
      <h2 class="title mb-12">SportSystem-ə xoş qəlmiziniz!</h2>
      <p class="text-2xl font-medium mb-6">
        Şəxsiyyətinizi təstiq etmək üçün
        aşağıda olan xanalardan birini doldurmanızı
        xahiş edirik
      </p>
      <form action="#" @submit.prevent="submitPhoneNumber">
        <label for="phone" class="mb-1 ml-2.5">Telefon nömrəni</label>
        <div class="flex">
          <input type="text" v-model="phoneNumber" placeholder="+994 (00) 000 0000" required>
          <button class="button text-2xl">
            <Check v-show="status.success" class="mr-4" />
            Yoxla
          </button>
        </div>
      </form>
      <form action="#">
        <label for="phone" class="mb-1 ml-2.5">E-unvan</label>
        <div class="flex">
          <input type="text" placeholder="name@domain.xyz" required>
          <button class="button text-2xl">Yoxla</button>
        </div>
      </form>
      <p class="text-2xl font-medium mt-7">Hesabiniz yoxdur?
        <RouterLink to="#" class="font-bold reg_link">Qeydiyyatdan</RouterLink>
        keçin!
      </p>
      <BackButton link="/" />
    </div>
  </main>
</template>

<style scoped>
h2 {
  font-size: 44px;
  font-weight: 700;
}

main {
  max-width: 660px;
  margin: auto;
}

.button {
  display: flex;
  align-items: center;
  background-color: #01C151;
  color: #fff;
  border-radius: 40px;
  font-weight: 700;
  height: 70px;
  padding: 0 36px;
}

input {
  height: 70px;
  border-radius: 35px;
  padding: 0 30px;
  font-size: 23px;
  font-weight: 700;
  border: 1px solid #000;
  margin-right: 10px;
}

input::placeholder {
  color: rgba(189, 189, 189, 1);
}

.reg_link {
  color: #01C151;
}
</style>