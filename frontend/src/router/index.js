import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/CategoriesList.vue"),
    },
    {
      path: "/products/:categoryId",
      name: "products",
      component: () => import("@/views/ProductList.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/CartList.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/OrdersList.vue"),      
    }
  ],
});

export default router;
