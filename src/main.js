import 'static';
import logger from 'loglevel';
import router from 'router';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

logger.setLevel("DEBUG");
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
