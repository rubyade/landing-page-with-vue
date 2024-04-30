<script>
import Button from '../components/Button.vue';
export default {
  components: {
    Button,
  },
};
</script>

<template>
  <div
    class="flex justify-between gap-4 items-center flex-col md:flex-row-reverse p-8"
    id="part-section"
  >
    <div>
      <img
        src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png"
        alt="woman-eating"
        class="mt-8"
      />
    </div>
    <div
      class="flex flex-col justify-between items-start gap-4 md:gap-2 md:mt-8"
    >
      <h1 class="text-5xl font-bold md:text-5xl">
        Everything you crave, delivered
      </h1>
      <h4 class="text-sm md:text-2xl font-bold">
        Your favorite local restaurants
      </h4>
      <p class="text-sm lg:text-lg italic lg:pr-12">
        Get a slice of pizza or the whole pie delivered, or pick up house lo
        mein from the Chinese takeout spot you've been meaning to try.
      </p>
      <Button class="bg-red-600 rounded-full text-white"
        >Find restaurants</Button
      >
    </div>
  </div>
</template>

<style></style>
