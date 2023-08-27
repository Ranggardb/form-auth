<template>
  <div
    class="shadow-lg p-5 rounded-md grid grid-cols-1 gap-2 w-full"
    :class="class"
  >
    <slot>
      <SkCard />
    </slot>
  </div>
</template>

<script>
import SkCard from '../Templaes/Skeleton/SkCard.vue';
export default {
  props: {
    class: String,
  },
  components: {
    SkCard,
  },
};
</script>

<style scoped></style>
