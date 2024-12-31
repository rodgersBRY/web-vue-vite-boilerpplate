import { defineStore } from "pinia";

export const useSharedStore = defineStore("shared", {
  state: () => ({
    loading: false,
    error: null,
  }),

  getters: {
    loading: (state) => state.loading,
    error: (state) => state.error,
  },

  actions: {
    setLoading(value) {
      this.loading = value;
    },

    setError(value) {
      this.error = value;
    },

    clearError() {
      this.error = null;
    },
  },
});
