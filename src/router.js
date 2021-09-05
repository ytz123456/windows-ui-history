import { createRouter, createWebHistory } from "vue-router";
import startPage from "./pages/startPage.vue";
import page1 from "./pages/Page1.vue";
import page2 from "./pages/Page2.vue";
import page3 from "./pages/Page3.vue";
import page4 from "./pages/Page4.vue";
import page5 from "./pages/Page5.vue";
import page6 from "./pages/Page6.vue";
import page7 from "./pages/Page7.vue";
import page8 from "./pages/Page8.vue";
import page9 from "./pages/Page9.vue";
import page10 from "./pages/Page10.vue";
import page11 from "./pages/Page11.vue";
import page12 from "./pages/Page12.vue";
import page13 from "./pages/Page13.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/page0",
    },
    { name: "page0", path: "/page0", component: startPage },
    { name: "page1", path: "/page1", component: page1 },
    { name: "page2", path: "/page2", component: page2 },
    { name: "page3", path: "/page3", component: page3 },
    { name: "page4", path: "/page4", component: page4 },
    { name: "page5", path: "/page5", component: page5 },
    { name: "page6", path: "/page6", component: page6 },
    { name: "page7", path: "/page7", component: page7 },
    { name: "page8", path: "/page8", component: page8 },
    { name: "page9", path: "/page9", component: page9 },
    { name: "page10", path: "/page10", component: page10 },
    { name: "page11", path: "/page11", component: page11 },
    { name: "page12", path: "/page12", component: page12 },
    { name: "page13", path: "/page13", component: page13 },
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
