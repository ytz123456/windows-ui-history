import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentPage: 0,
    };
  },
  mutations: {
    changePage(state, page) {
      state.currentPage = page;
    },
  },
  getters: {
    getCurrentPage(state) {
      return state.currentPage;
    },
  },
});

export default store;
