import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import IdGeneratorView from "@/views/IdGeneratorView.vue";
import PersonGeneratorView from "@/views/PersonGeneratorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/person",
      name: "personGenerator",
      component: PersonGeneratorView,
    },
    {
      path: "/id",
      name: "idGenerator",
      component: IdGeneratorView,
    },
  ],
});

export default router;
