// middleware.ts

// middleware.ts
import { type NavigationGuardNext, type RouteLocationNormalized, type NavigationGuardWithThis } from 'vue-router';
// import { useAuthStore } from '../stores/counter';
import { useSweetAlert } from '../composables/swal';

export const checkAuthMiddleware: NavigationGuardWithThis<undefined> = async (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // const authStore = useAuthStore();
  const isAuthenticated = localStorage.getItem('token');
  const { showError } = useSweetAlert()

  if (to.meta.requiresAuth && !isAuthenticated) {
    showError('Token is Invalid, Please re-login')
    next({name: 'loginHome'})
  } else {
    console.log("tidak wajib auth")
    next();
  }
};
