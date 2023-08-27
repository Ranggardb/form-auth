<template>
  <button
    class="w-fit py-2 px-4 rounded-lg text-white bg-theme-orange hover:bg-theme-maroon transition capitalize font-medium outline-theme-orange"
    :class="class"
    :type="type"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    type: String,
    class: String,
  },
};
</script>

<style scoped></style>
