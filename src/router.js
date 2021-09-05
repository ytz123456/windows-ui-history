import { createRouter, createWebHistory } from "vue-router";
import startPage from "./pages/startPage.vue";
import page1 from "./pages/Page1.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/page0",
    },
    { name: "page0", path: "/page0", component: startPage },
    { name: "page1", path: "/page1", component: page1 },
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
