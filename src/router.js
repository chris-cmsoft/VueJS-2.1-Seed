import VueRouter from 'vue-router';

import Items from './components/itemCounter/Items';

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {
    path: '/items',
    name: 'items',
    component: Items,
    meta: {
      isGuestRoute: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Items,
    meta: {
      isGuestRoute: true,
    },
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
});

router.match({
  '*': '/',
});

router.beforeEach((to, from, next) => {
  if (to.meta.isGuestRoute !== true) {
    if (sessionStorage.getItem('token') === null) {
      next('/login');
    }
  }
  next();
});

export default router;
