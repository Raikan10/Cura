import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    feels: {
      happy: "😄",
      sad: "🙁",
      surprised: "😲",
      releived: "😌",
      excited: "🤩"
    }
  },
  mutations: {},
  actions: {},
  getters: {
    getFeel(state) {
      return state.feels;
    }
  }
});
