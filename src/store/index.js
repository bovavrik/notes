import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    note: {},
  },
  getters: {
    notes: state => state.notes,
    note: state => state.note,
  },
  actions: {
    pull({ commit }) {
      return new Promise((resolve, reject) => {
        Vue.axios.get('/api/notes').then(({ data }) => {
          commit('set', {
            key: 'notes',
            value: data.data,
          });
          resolve(data);
        }, reject).catch(reject);
      });
    },
    push({ state }) {
      return new Promise((resolve, reject) => {
        Vue.axios.post('/api/notes', state.note).then(({ data }) => {
          resolve(data);
        }, reject).catch(reject);
      });
    },
    set({ commit }, { key, value }) {
      commit('set', {
        key,
        value,
      });
    },
  },
  mutations: {
    set(state, { key, value }) {
      Vue.set(state, key, value);
    },
  },
});
