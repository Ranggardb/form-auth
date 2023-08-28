import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../pages/Auth/Login.vue';
import User from '../pages/Auth/User.vue';
import ForgotPassword from '../pages/Auth/ForgotPassword.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/user', component: User },
  { path: '/forgot-password', component: ForgotPassword },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
