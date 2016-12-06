export default {
  state: {
    counter: 0,
    items: [],
  },
  getters: {
    itemCountCounter: state => state.items.length,
  },
  mutations: {
    addItem: (state, item) => {
      state.items.push(item);
      // eslint-disable-next-line no-param-reassign
      // state.counter = state.items.length;
    },
  },
  actions: {
    addItemCountItem: ({ commit }, item) => {
      commit('addItem', item);
    },
  },
};
