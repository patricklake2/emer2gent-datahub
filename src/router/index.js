import Vue from 'vue';
import VueRouter from 'vue-router';

import AddData from '../components/AddData.vue';
import Catalogue from '../components/Catalogue.vue';
import Dataset from '../components/Dataset.vue';
import Homepage from '../components/Homepage.vue';
import PageNotFound from '../components/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: Catalogue,
  },
  {
    path: '/catalogue/:org',
    name: 'Catalogue',
    component: Catalogue,
  },
  {
    path: '/catalogue/:org/:id',
    name: 'Details',
    component: Dataset,
  },
  {
    path: '/add',
    name: 'Add Data',
    component: AddData,
  },
  {
    path: '*',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/',
});

export default router;
