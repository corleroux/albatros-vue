import { funeralproducts } from "@/models/funeralproductmodel";

const state = {
  funeralproducts: funeralproducts,
};

const getters = {
  getallfuneralproducts(state) {
    return state.funeralproducts;
  },
};
const mutations = {};
const actions = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
