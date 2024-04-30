<template>
  <div
    className=" p-14 m-0 flex items-center flex-col
  "
  >
    <h2
      className="header-text text-xl w-60 pt-10 text-center md:text-3xl md:w-auto lg:text-5xl lg:w-auto xl:text-7xl"
    >
      Discover restaurants and more near you
    </h2>
    <input
      class="placeholder-shown:border-gray-500 mt-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      type="text"
      v-model="delivery"
      placeholder="Enter delivery address"
    />
    <div class="text-sm font-black mt-9 text-center" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-if="quotes.length">
      <p class="pt-9 italic text-center text-gray-800 text-sm">
        {{ quotes }}
      </p>
    </div>
    <div class="mt-9 text-xl font-bold" v-else>Loading...</div>
  </div>
  <FirstSection />
  <SecondSection />
  <ThirdSection />
</template>

<script>
import { ref } from 'vue';
import Button from '../components/Button.vue';
import FirstSection from '../components/FirstSection.vue';
import SecondSection from '../components/SecondSection.vue';
import ThirdSection from '../components/ThirdSection.vue';
export default {
  components: {
    Button,
    FirstSection,
    SecondSection,
    ThirdSection,
  },
  setup() {
    const quotes = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch('https://api.quotable.io/random');
        if (!data.ok) {
          throw Error('No data available. Please check back later');
        }
        let response = await data.json();
        quotes.value = response.content;
      } catch (err) {
        error.value = err.message;
      }
    };
    load();
    return { quotes, error };
  },
  data() {
    return {
      delivery: '',
    };
  },
};
</script>

<style></style>
