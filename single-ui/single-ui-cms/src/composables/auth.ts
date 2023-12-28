  // auth.ts

  import { ref } from 'vue';
  // import { useAuthStore } from '../stores/counter';

  // const authStore = useAuthStore();

  export function useAuth() {
    const isAuthenticated = ref(false);

    const login = (token: string) => {
      // authStore.setToken(token);
      isAuthenticated.value = true;
      localStorage.setItem('token', token);
    };

    const logout = () => {
      // authStore.setToken(null);
      isAuthenticated.value = false;
      localStorage.removeItem('token');
    };

    const checkAuthentication = () => {
      // const token = authStore.getToken;
      // isAuthenticated.value = !!token;
      return isAuthenticated.value;
    };

    return {
      // authStore,
      isAuthenticated,
      login,
      logout,
      checkAuthentication,
    };
  }
