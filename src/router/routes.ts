import { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Products from "../views/Products.vue";

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/apply",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];
