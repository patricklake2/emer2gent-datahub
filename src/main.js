import Vue from 'vue';
import App from './App.vue';

import './style.css';
import router from './router';
import { getIndex, getSchema } from './utils/get-data';

Vue.config.productionTip = false;

async function initialise() {
  const [index, schema] = await Promise.all([getIndex(), getSchema()]);
  new Vue({
    data: { index, schema },
    router,
    render: h => h(App),
  }).$mount('#app');
}

initialise();
