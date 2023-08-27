<template>
  <a
    class="capitalize text-theme-maroon hover:text-theme-orange outline-theme-orange p-1"
    :class="class"
    :href="href"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    text: String,
    class: String,
  },
};
</script>

<style scoped></style>
