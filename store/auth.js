export const state = () => ({
  auth: {},
});

export const mutations = {
  setAuth(state, data) {
    state.auth = data;
  },
  removeAuth(state) {
    state.auth = {};
  },
};

export const getters = {
  isLoggedIn(state) {
    return !!state.auth.id;
  },
  isPasswordChanged(state) {
    return !!state.auth.password_changed;
  },
};
