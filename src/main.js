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


Vue.http.interceptors.push((request, next) => {
  store.dispatch('getAuthHeaders')
    .then((headers) => {
      const headerMap = new Map(Object.entries(headers));
      headerMap.forEach((value, key) => {
        request.headers.append(key, value);
      });
      next();
    });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
});
