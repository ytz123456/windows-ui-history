import { createRouter, createWebHistory } from "vue-router";
import startPage from "./pages/startPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/start",
    },
    { name: "start", path: "/start", component: startPage },
  ],
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
