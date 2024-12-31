import { defineStore } from "pinia";

export const useSharedStore = defineStore("shared", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null,
  }),

  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    async login(payload) {
      this.user = payload;
    },

    setError(payload) {
      this.error = payload;
    },
  },
});
