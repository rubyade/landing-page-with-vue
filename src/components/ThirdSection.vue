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
    class="flex justify-between items-center gap-16 flex-col p-8 md:flex-row"
    id="part-section"
  >
    <div>
      <img
        src="https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/dashpass_desktop.png"
        alt="woman-eating"
        class="mt-8"
      />
    </div>
    <div
      class="flex flex-col justify-between items-start gap-4 md:gap-1 md:mt-8"
    >
      <h1 class="text-5xl font-bold md:text-5xl">
        DashPass is delivery for less
      </h1>
      <h4 class="text-sm md:text-2xl font-bold">
        DashPass is delivery for less
      </h4>
      <p class="text-sm lg:text-lg italic lg:pr-12">
        Members get a $0 delivery fee on DashPass orders, 5% back on pickup
        orders, and so much more. Plus, it's free for 30 days.
      </p>
      <Button class="bg-red-600 rounded-full text-white">Get Dash Pass</Button>
    </div>
  </div>
</template>

<style></style>
