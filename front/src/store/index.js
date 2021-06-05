import { createStore } from "vuex";
import Model from "../model/model.js";
export default createStore({
  state: {
    model: new Model(),
  },
  mutations: {
    CREATE_ITEMS(state, items) {
      state.model.createItems(items);
    },
    CHANGE_STATUS(state, status) {
      state.model.changeStatus(status);
    },
  },
  actions: {
    CREATE_ITEMS({ commit }, items) {
      commit("CREATE_ITEMS", items);
    },
  },
  modules: {},
});
