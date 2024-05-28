<template>
  <div class="form-container bg-gradient-to-r from-red-300 to-gray-500 h-full">
    <div class="px-7 font-light text-xs pt-9 inline-flex items-baseline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-3 h-3 pt-1 text-white font-bold"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      <RouterLink class="md:mx-4 md:my-0 my-6 text-white font-bold" to="/"
        >Home</RouterLink
      >
    </div>

    <form @submit.prevent="submitForm" class="form p-7 md:p-28 lg:p-44 xl:p-52">
      <div>
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        <span v-if="v$.email.$error" class="text-red-500 text-xs font-light">{{
          v$.email.$errors[0].$message
        }}</span>

        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="mt-8 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        <span
          v-if="v$.password.$error"
          class="text-red-500 text-xs font-light"
          >{{ v$.password.$errors[0].$message }}</span
        >
      </div>

      <Button class="mt-12 mb-9">Login</Button>
    </form>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength } from '@vuelidate/validators';

export default {
  components: {
    Button,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(12) },
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        alert('Form Sumbitted Successfully');
      } else {
        alert('Form Failed Validation');
      }
    },
  },
};
</script>

<style></style>
