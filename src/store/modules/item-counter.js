export default {
  state: {
    items: [],
  },
  getters: {
    itemCountCounter: state => state.items.filter(item => item.loading === false).length,
  },
  mutations: {
    addItem: (state, item) => {
      const itemId = new Date().getTime();
      const itemObject = {
        id: itemId,
        name: item.name,
        loading: true,
      };
      state.items.push(itemObject);
      const itemKey = state.items.findIndex(filterItem => filterItem.id === itemId);

      setTimeout(() => {
        // eslint-disable-next-line no-param-reassign
        state.items[itemKey].loading = false;
      }, 2000);
    },
  },
  actions: {
    addItemCountItem: ({ commit }, item) => new Promise((resolve) => {
      commit('addItem', item);
      resolve();
    }),
  },
};
