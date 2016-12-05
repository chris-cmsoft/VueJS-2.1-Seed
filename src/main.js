import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import './global-components';

// Tell vue to include Router
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
