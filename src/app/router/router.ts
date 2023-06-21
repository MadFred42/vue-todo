import UsersPage from '@/pages/UsersPage.vue';
import PaymentPage from '@/pages/PaymentPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: UsersPage,
  },
  {
    path: '/payment',
    component: PaymentPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
