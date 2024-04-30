<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <main>
    <Navbar />
    <router-view></router-view>
  </main>
</template>

<style></style>
