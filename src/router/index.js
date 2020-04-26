import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Feed from "../views/Feed.vue";
import SignUp from "../views/SignUp.vue";
import Cure from "../views/Cure.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed
  },
  {
    path: "/signup",
    name: "SingnUp",
    component: SignUp
  },
  {
    path: "/cure",
    name: "Cure",
    component: Cure
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
