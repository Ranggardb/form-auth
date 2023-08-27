<template>
  <div>
    <!-- <Login /> -->
    <ForgotPassword />
  </div>
</template>

<script>
import ForgotPassword from './pages/Auth/ForgotPassword.vue';
import Login from './pages/Auth/Login.vue';

export default {
  components: { Login, ForgotPassword },
};
</script>

<style lang="scss" scoped></style>
