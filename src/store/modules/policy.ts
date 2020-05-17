/* eslint-disable es-beautifier/multiline-import-specifiers */
import { applicationformschema } from "@/models/applicationFormSchema";
import { applicationformvalues } from "@/models/applicationFormStructure";
import { get, is, hasIn, set } from "lodash";

const state = {
  funeralpolicyschema: applicationformschema,
  funeralpolicyvalues: applicationformvalues,
  dependants: [],
  counter: 7,
};

const getters = {
  stringDependant(state) {
    return state.dependants;
  },
  counter(state) {
    return state.counter;
  },
  policyformschema(state) {
    return state.funeralpolicyschema;
  },
};

const mutations = {
  setPolicyValue(state, payload) {
    if (hasIn(state.funeralpolicyvalues, payload.key.toString().split("."))) {
      set(
        state.funeralpolicyvalues,
        payload.key.toString().split("."),
        payload.value
      );
    }
  },
};

const actions = {
  setPolicyValue: ({ commit }, payload) => {
    commit("setPolicyValue", payload);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
