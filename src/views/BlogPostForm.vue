<template>
  <div class="bg-gradient-to-r from-cyan-500 to-red-300">
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
    <form @submit.prevent="submitForm" class="p-7 md:p-28 lg:p-44 xl:p-52">
      <label class="block pb-8">
        <span> Blog Topic </span>
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          type="text"
          placeholder="Please type the topic of the post here"
          v-model="blogTopic"
        />
        <span v-if="v$.blogTopic.$error" class="text-red-500 text-sm">{{
          v$.blogTopic.$errors[0].$message
        }}</span>
      </label>

      <label class="block pb-8">
        <span> Blog Post </span>
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          type="text"
          placeholder="What name would you like to give your post?"
          v-model="blogPost"
        />
        <span v-if="v$.blogPost.$error" class="text-red-500 text-sm">{{
          v$.blogPost.$errors[0].$message
        }}</span>
      </label>

      <label class="block pb-8">
        <span>Blog Summary</span>
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          type="text"
          placeholder="Please give a summary of your post"
          v-model="blogSummary"
        />
        <span v-if="v$.blogSummary.$error" class="text-red-500 text-sm">{{
          v$.blogSummary.$errors[0].$message
        }}</span>
      </label>

      <label class="block pb-8">
        <span>Blog Details</span>
        <textarea
          type="text-area"
          placeholder="Please add a detailed description of the blog post....."
          v-model="blogDetails"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
        <span v-if="v$.blogDetails.$error" class="text-red-500 text-sm">{{
          v$.blogDetails.$errors[0].$message
        }}</span>
      </label>

      <Button>Submit Post</Button>
    </form>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength } from '@vuelidate/validators';

export default {
  components: {
    Button,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      blogTopic: '',
      blogPost: '',
      blogSummary: '',
      blogDetails: '',
    };
  },
  validations() {
    return {
      blogTopic: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(50),
      },
      blogPost: { required, minLength: minLength(6), maxLength: maxLength(50) },
      blogSummary: {
        required,
        minLength: minLength(25),
        maxLength: maxLength(100),
      },
      blogDetails: {
        required,
        minLength: minLength(25),
        maxLength: maxLength(200),
      },
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
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
