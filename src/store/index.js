

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemCount: {
      counter: 0,
    },
  },
  getters: {
    counter: (state) => {
      const counter = state.itemCount.counter;
      return counter;
    },
  },
  /* eslint no-param-reassign: ["error", { "props": false }]*/
  mutations: {
    increment: state => (state.itemCount.counter += 1),
  },
});
