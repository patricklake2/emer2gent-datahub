import Vue from 'vue';
import App from './App.vue';

import './style.css';
import router from './router';
import getIndex from './utils/get-data';

Vue.config.productionTip = false;

async function initialise() {
  const index = await getIndex();
  new Vue({
    data: { index },
    router,
    render: h => h(App),
  }).$mount('#app');
}

initialise();
