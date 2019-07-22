import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    loading(state, data) {
      if (typeof data === 'string') {
        state.loading = true
      }
      if (typeof data === 'boolean') { state.loading = data; }
    },
  },
  actions: {

  },
});
