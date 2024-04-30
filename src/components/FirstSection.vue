<template>
  <div
    class="flex flex-col justify-between gap-7 items-center p-8 md:flex md:flex-row"
  >
    <div
      v-for="section in sections"
      :key="section.id"
      class="flex flex-col md:p-4 items-center justify-center flex-wrap"
    >
      <img :src="section.image" alt="logo" class="w-56" />
      <h1 class="text-center text-3xl font-bold pt-8">
        {{ section.heading }}
      </h1>
      <h4 class="text-center text-xl">{{ section.shortText }}</h4>
      <a
        class="text-center text-red-600 font-bold italic cursor-pointer"
        href="
  #"
        >{{ section.link }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          id: 1,
          image:
            'https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg',
          heading: 'Become a Dasher',
          shortText:
            "As a delivery driver, you'll make reliable money—working anytime, anywhere.",
          link: 'Start earning',
        },
        {
          id: 2,
          image:
            'https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg',
          heading: 'Become a Partner',
          shortText:
            'Grow your business and reach new customers by partnering with us.',
          link: 'Sign up your store',
        },
        {
          id: 3,
          image:
            'https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg',
          heading: 'Get the best DoorDash experience',
          shortText:
            'Experience the best your neighborhood has to offer, all in one app.',
          link: 'Get the app',
        },
      ],
    };
  },
};
</script>

<style></style>
