<template>
  <div
    class="flex items-center h-14 bg-theme-cream shadow-md shadow-black/10 cursor-pointer group duration-300"
    :class="class"
  >
    <RouterLink to="/">
      <figure class="flex items-end">
        <img
          class="w-12 rounded-lg group-hover:scale-110"
          :src="logo"
          alt="logo"
        />
        <figcaption class="text-lg font-semibold group-hover:text-theme-maroon">
          Home
        </figcaption>
      </figure>
    </RouterLink>
  </div>
</template>

<script>
import logo from '../../assets/image/logo.png';
export default {
  data() {
    return {
      logo: logo,
    };
  },
  props: {
    class: String,
  },
};
</script>

<style lang="scss" scoped></style>
