import VueRouter from 'vue-router';

import Items from './components/Items';
import Count from './components/Count';
import Login from './components/Login';
import Home from './components/Home';
import store from './store';

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'items',
        component: Items,
      },
      {
        path: '/count',
        name: 'count',
        component: Count,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isGuestRoute: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.match({
  '*': '/',
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isGuestRoute) {
    store.dispatch('isLoggedIn')
      .then(
        () => next(),
        () => next('/login')
      );
  }
  next();
});

export default router;
