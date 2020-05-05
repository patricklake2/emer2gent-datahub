import Vue from 'vue';
import VueRouter from 'vue-router';

import Catalogue from '../components/Catalogue.vue';
// import Data from '../components/Data.vue';
import DetailedView from '../components/DetailedView.vue';
import Homepage from '../components/Homepage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },
  {
    path: '/data',
    name: 'Catalogue',
    component: Catalogue,
  },
  {
    path: '/data/:org',
    name: 'Catalogue',
    component: Catalogue,
  },
  {
    path: '/data/:org/:id',
    name: 'Details',
    component: DetailedView,
  },
  // {
  //   path: '/data',
  //   name: 'Data',
  //   component: Data,
  //   children: [
  //     {
  //       path: '',
  //       name: 'Catalogue',
  //       component: Catalogue,
  //     },
  //     {
  //       path: ':org',
  //       name: 'Catalogue',
  //       component: 'Catalogue',
  //     },
  //     {
  //       path: ':org/:id',
  //       name: 'Details',
  //       component: DetailedView,
  //     },
  //   ],
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
