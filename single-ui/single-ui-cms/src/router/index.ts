import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '../layout/AdminLayout.vue';
import LoginLayout from '../layout/GuestLayout.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
// import { useAuthStore } from '@/stores/counter';
import { checkAuthMiddleware } from './middleware';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'home',
      component: AdminLayout,
      meta: { requiresAuth: true }, // Tandai halaman yang memerlukan otentikasi
      beforeEnter: checkAuthMiddleware, // 
      children: [
        {
          path: '',
          name: 'data',
          component: HomeView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginLayout,

      children: [
        {
          path: '',
          name: 'loginHome',
          component: LoginView
        }
      ]
    }
  ]
})

export default router
