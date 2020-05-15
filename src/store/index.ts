import Vue from "vue";
import Vuex from "vuex";
import policy from "./modules/policy";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    policy,
  },
  getters: {},
});
