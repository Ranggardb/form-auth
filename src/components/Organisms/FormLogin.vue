<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-theme-cream rounded-lg max-w-sm"
  >
    <h2 class="text-xl text-theme-maroon font-medium py-3 text-center">
      Sign in
    </h2>
    <AppCard class="justify-items-end grid-cols-1 gap-3">
      <AppInput
        name="username"
        label="usename"
        @update:input="onInputUsername"
      />
      <AppInput
        name="password"
        label="password"
        @update:input="onInputPassword"
      />
      <AppButton class="w-full" type="submit" text="login" />
      <AppLink class="text-xs" text="forgot password" />
    </AppCard>
  </form>
  <p>username: {{ username }}</p>
  <p>password: {{ password }}</p>
</template>

<script>
import AppButton from '../Atoms/AppButton.vue';
import AppInput from '../Atoms/AppInput.vue';
import AppLink from '../Atoms/AppLink.vue';
import AppCard from '../Molecules/AppCard.vue';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onInputUsername(input) {
      this.username = input;
    },
    onInputPassword(input) {
      this.password = input;
    },
    handleSubmit() {},
  },
  components: { AppInput, AppCard, AppLink, AppButton },
};
</script>

<style scoped></style>
