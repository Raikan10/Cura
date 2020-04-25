import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Feed from "../views/Feed.vue";
import SignUp from "../views/SignUp.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
