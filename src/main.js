import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import './global-components';
import router from './router';
import store from './store';

// Tell vue to include Router
Vue.use(VueRouter);

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
  http: {
    root: 'http://userservice.staging.tangentmicroservices.com/',
  },
});
