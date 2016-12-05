import Vue from 'vue';

Vue.component('icon', {
  template: '<i class="material-icons">{{icon}}</i>',
  props: ['icon'],
});
