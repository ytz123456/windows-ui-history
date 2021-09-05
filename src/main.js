import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import store from "./store.js";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(store);
app.mixin({
  methods: {
    setPage(num) {
      this.$store.commit("changePage", num);
      this.$router.push("page" + num);
    },
  },
});
app.mount("#app");
