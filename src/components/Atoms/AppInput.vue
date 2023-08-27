<template>
  <div class="relative z-0 w-full mb-6 group">
    <input
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-theme-orange appearance-none focus:outline-none focus:ring-0 focus:border-theme-maroon peer"
      :placeholder="placeholder"
      :id="name"
      :type="type"
      :autocomplete="autocomplete"
      :name="name"
      @input="handleChange"
    />
    <label
      v-if="label"
      :for="name"
      class="peer-focus:font-semibold absolute text-sm text-theme-orange duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-theme-maroon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:tracking-wide peer-focus:-translate-y-6 capitalize"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    name: String,
    label: String,
    placeholder: {
      type: String,
      default: ' ',
    },
  },
  emits: ['update:input'],
  methods: {
    handleChange(event) {
      this.$emit('update:input', event.target.value);
    },
  },
};
</script>

<style scoped></style>
