import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/view/home-page"),
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("@/view/about-page"),
    props: true
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import("@/view/catalog-page/catalog"),
    props: true
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router