import Vue from "vue";
import VueRouter from "vue-router";
import Swap from "../views/Swap.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/swap"
  },
  {
    path: "/swap",
    name: "Swap",
    component: Swap
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
