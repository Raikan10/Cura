import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "./assets/sass/index.scss";

Vue.use(Buefy);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");
