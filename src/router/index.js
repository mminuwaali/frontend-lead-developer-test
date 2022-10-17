import HomeView from '../views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { component: HomeView, path: '/', name: 'home', },
    { name: 'dash', path: '/:page', component: () => import('../views/HomeView.vue') }
  ]
})

export default router;
