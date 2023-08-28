<template>
  <div>
    <RouterView />
    <!-- <router-view></router-view> -->
    <!-- <Login /> -->
    <!-- <ForgotPassword /> -->
    <!-- <User /> -->
  </div>
</template>

<script>
import ForgotPassword from './pages/Auth/ForgotPassword.vue';
import Login from './pages/Auth/Login.vue';
import User from './pages/Auth/User.vue';

export default {
  components: { Login, ForgotPassword, User },
};
</script>

<style scoped></style>
