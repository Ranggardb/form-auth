<template>
  <RouterLink
    class="capitalize text-theme-maroon hover:text-theme-orange outline-theme-orange p-1"
    :class="class"
    :to="to"
  >
    {{ text }}
  </RouterLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '#',
    },
    text: String,
    class: String,
  },
};
</script>

<style scoped></style>
