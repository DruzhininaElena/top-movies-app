import { createStore } from "vuex";
import movies from "@/store/modules/movies";
import loader from "@/store/modules/loader";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
  },
});
