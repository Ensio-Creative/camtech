import { createStore } from 'vuex'

export default createStore({
  state: {
    showMobile: false,
  },
  mutations: {
    UPDATE_MOBILE (state, payload) {
      state.showMobile = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
