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
const FBCONFIG = {
  apiKey: "AIzaSyArzQjmxUUZjd56ry9L0MBu3Ze3feAGmg8",
  authDomain: "cura-fa109.firebaseapp.com",
  databaseURL: "https://cura-fa109.firebaseio.com",
  projectId: "cura-fa109",
  storageBucket: "cura-fa109.appspot.com",
  messagingSenderId: "348628641539",
  appId: "1:348628641539:web:658da7a7791a8ebfd8ab36",
  measurementId: "G-786BXHTQJ6"
};
Vue.use(VueFirebase, {firebase: firebase, config: FBCONFIG});

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount("#app");
