<template>
  <div>
    <nav
      id="menu"
      class="navbar flex justify-between items-center bg-red-300 pb-9 p-8"
    >
      <img :src="logo" alt="logo" class="max-w-28" />
      <div
        class="navlink flex flex-col justify-between md:flex-row md:gap-9 gap-10 md:items-center md:px-0 px-10 pb-9 md:pb-0 md:static absolute bg-red-300 md:w-auto w-full duration-700 ease-in text-white top-44 text-xl font-bold"
        :class="[open ? 'left-0' : 'left-[-100%]']"
      >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="login">Login</RouterLink>
        <RouterLink to="signup">Sign-Up</RouterLink>
        <RouterLink to="blogpost">Blog-Post</RouterLink>
      </div>
      <div id="mobile" @click="toggleMenu">
        <span
          @click="menuOpen()"
          class="absolute md:hidden right-6 cursor-pointer text-6xl top-14 text-white"
        >
          <i :class="[open ? 'bi bi-x-lg' : 'bi bi-list']"></i>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import logo_light from '../assets/logo_light.png';
import logo_dark from '../assets/logo_light.png';
import search_icon_light from '../assets/search-w.png';
import search_icon_dark from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';
import { ref } from 'vue';
export default {
  setup() {
    let open = ref(false);

    function menuOpen() {
      open.value = !open.value;
    }
    return { open, menuOpen };
  },
  data() {
    return {
      logo: logo_light,
      showMenu: false,
    };
  },
  methods() {},
};
</script>

<style></style>
