import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home/Home.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import ForgotPassword from "../views/Auth/ForgotPassword.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/auth/login",
    name: "login",
    component: Login,
  },
  {
    path: "/auth/register",
    name: "register",
    component: Register,
  },
  {
    path: "/auth/forgot-password",
    name: "forgot password",
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;