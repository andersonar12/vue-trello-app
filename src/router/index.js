import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home';
import Board from '@/views/Board';
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/board/:id/:name",
    name: "board",//nombre de la ruta
    component: Board,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;