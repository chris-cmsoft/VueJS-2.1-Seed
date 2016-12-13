import Vue from 'vue';
import Vuex from 'vuex';

import ItemCounter from './modules/item-counter';
import Authentication from './modules/authentication';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    itemCount: ItemCounter,
    authentication: Authentication,
  },
});
