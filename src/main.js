import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import './global-components';
import router from './router';

// Tell vue to include Router
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
});
