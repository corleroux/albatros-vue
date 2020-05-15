import { applicationformschema } from "@/models/applicationFormSchema";

const state = {
  funeralpolicy: applicationformschema,
  dependants: [],
  counter: 5,
};

const mutations = {
  decrementCounter(state, payload) {
    state.counter = state.counter - payload;
    state.counter < 0 ? (state.counter = 0) : state.counter;
  },
  resetCounter(state) {
    state.counter = 5;
  },
};

const actions = {
  decrementState(state, payload) {
    state.commit("decrementCounter", payload);
  },
  resetState(state) {
    state.commit("resetCounter");
  },
};

const getters = {
  stringDependant(state) {
    return state.dependants;
  },
  counter(state) {
    return state.counter;
  },
  policyformschema(state) {
    return state.funeralpolicy;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
