// store.ts

import  { defineStore } from 'pinia';

// Buat store Pinia
export const pinia = defineStore;

// Buat store
export const useAuthStore = pinia('auth', {
  state: () => ({
    token: '',
    username: '',
  }),
  getters: {
    getToken: (state) => !!state.token,
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUsername(username: string) {
      this.username = username;
    },
    clearUserData() {
      this.token = '';
      this.username = '';
    },
  },
});

