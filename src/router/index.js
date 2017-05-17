import VueRouter from 'vue-router';
import Tasks from 'components/Tasks.vue';

const routes = [{
  name: 'tasks',
  path: '/',
  component: Tasks
}];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
