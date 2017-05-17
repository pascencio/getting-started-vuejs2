import 'static';
import router from 'router';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
