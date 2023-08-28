<template>
  <section class="bg-theme-cream min-h-screen flex items-center justify-center">
    <div
      class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative"
    >
      <h1 class="mb-4 text-2xl font-bold leading-none text-gray-900">
        Forgot Your Password?
      </h1>
      <h2
        class="mb-4 text-lg font-semibold tracking-tight leading-none text-slate-900"
      >
        Reset It Here.
      </h2>
      <p class="mb-8 text-lg font-normal text-gray-700 sm:px-16 lg:px-48">
        If you've forgotten your password, don't worry. We'll help you reset it.
        Please enter your email address associated with your account, and we'll
        send you a link to reset your password.
      </p>
      <form @submit.prevent="handleSubmit" class="w-full max-w-md mx-auto">
        <label
          for="default-email"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >Email sign-up</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-theme-orange"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              />
            </svg>
          </div>
          <input
            type="email"
            id="default-email"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border-none rounded-lg bg-white outline-theme-maroon focus:outline-theme-orange duration-300 ease-in"
            placeholder="Enter your email here..."
            required
          />
          <AppButton
            class="absolute tracking-wide right-2.5 bottom-2"
            text="reset"
          />
        </div>
      </form>
      <p class="mt-5 text-gray-700">
        Didn't mean to reset your password?
        <AppLink to="/" class="font-semibold" text="go back" />
      </p>
    </div>
    <div
      class="bg-gradient-to-b from-theme-cream to-transparent w-full h-full absolute top-0 left-0 z-0"
    ></div>
  </section>
</template>

<script>
import AppButton from '../../components/Atoms/AppButton.vue';
import AppLink from '../../components/Atoms/AppLink.vue';

export default {
  components: { AppButton, AppLink },
  methods: {
    handleSubmit() {},
  },
};
</script>

<style scoped></style>
