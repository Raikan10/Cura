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
      relieved: "😌",
      excited: "🤩"
    },
    status: [
      "Asymptomatic","Infected","Recovering","Recovered"
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getFeel(state) {
      return state.feels;
    },
    getStatus(state) {
      return state.status;
    }
  }
});
