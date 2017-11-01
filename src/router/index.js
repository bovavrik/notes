import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import notes from '@/components/notes';
import notesDetail from '@/components/notes-detail';
import notesAdd from '@/components/notes-add';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/notes',
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/notes',
      name: 'notes',
      meta: {
        auth: true,
      },
      component: notes,
    },
    {
      path: '/notes/add',
      name: 'notesAdd',
      meta: {
        auth: true,
      },
      component: notesAdd,
    },
    {
      path: '/notes/:note',
      name: 'note',
      meta: {
        auth: true,
      },
      component: notesDetail,
    },
  ],
  mode: 'history',
});
