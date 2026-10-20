// js/router.js
const { createRouter, createWebHashHistory } = VueRouter;

const routes = [
  { path: '/', component: Home },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});