<template>
  <div class="bg-gradient-to-r from-white to-red-300">
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
      <RouterLink class="text-white font-bold md:mx-4 md:my-0 my-6" to="/"
        >Home</RouterLink
      >
    </div>
    <h2 class="text-center text-white capitalize text-3xl underline font-bold">
      Create an Account
    </h2>
    <form @submit.prevent="submitForm" class="p-7 md:p-28 lg:p-44 xl:p-52">
      <label class="block pb-8">
        <span
          class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
        >
          First Name
        </span>
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          type="text"
          name="firstName"
          placeholder="Please type your first name here"
          v-model="firstName"
        />
        <span v-if="v$.firstName.$error" class="text-red-500 text-sm">{{
          v$.firstName.$errors[0].$message
        }}</span>
      </label>

      <label class="block pb-8">
        <span
          class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
        >
          Last Name
        </span>
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          type="text"
          placeholder="Please type your last name here"
          v-model="lastName"
        />
        <span v-if="v$.lastName.$error" class="text-red-500 text-sm">{{
          v$.lastName.$errors[0].$message
        }}</span>
      </label>

      <label class="block pb-8">
        <span
          class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
        >
          Email
        </span>
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          type="email"
          placeholder="Please input your email address"
          v-model="email"
        />
        <span v-if="v$.email.$error" class="text-red-500 text-sm">{{
          v$.email.$errors[0].$message
        }}</span>
      </label>

      <label class="block pb-8">
        <span
          class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
        >
          Password
        </span>
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          type="password"
          placeholder="Please choose a password"
          v-model="password"
        />
        <span v-if="v$.password.$error" class="text-red-500 text-sm">{{
          v$.password.$errors[0].$message
        }}</span>
      </label>

      <label class="block pb-8">
        <span
          class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
        >
          Confirm Password
        </span>
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          type="password"
          placeholder="Please confirm your password"
          v-model="confirmPassword"
        />
        <span v-if="v$.confirmPassword.$error" class="text-red-500 text-sm">{{
          v$.confirmPassword.$errors[0].$message
        }}</span>
      </label>
      <Button>Create An Account</Button>
    </form>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import { useVuelidate } from '@vuelidate/core';
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  alpha,
} from '@vuelidate/validators';

export default {
  components: {
    Button,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  validations: {
    firstName: { required, minLength: minLength(3), alpha },
    lastName: { required, minLength: minLength(3), alpha },
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(12) },
    confirmPassword: {
      required,
      sameAs: sameAs('password'),
      minLength: minLength(3),
      alpha,
    },
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
    // async submit() {
    //   const result = await this.v$.$validate();
    // },
    // setup: () => ({ v$: useVuelidate() }),
  },
};
</script>

<style></style>
