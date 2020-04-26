import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "./assets/sass/index.scss";
import * as firebase from "firebase";
import VueFirebase from 'vue-firebase'


Vue.use(Buefy);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

//Config Comes here

Vue.use(VueFirebase, {firebase: firebase, config: FBCONFIG});

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount("#app");
