// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAuth from '@websanova/vue-auth';
import VueAxios from 'vue-axios';
import axios from 'axios';
import driverHttp from '@websanova/vue-auth/drivers/http/axios.1.x';
import driverRouter from '@websanova/vue-auth/drivers/router/vue-router.2.x';
import App from './App';
import router from './router';
import store from './store';

Vue.router = router;

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.use(VueAuth, {
  auth: {
    request(req, token) {
      this.options.http._setHeaders.call(this, req, { Authorization: `Bearer ${token}` }); // eslint-disable-line
    },
    response({ data }) {
      return (data.data || {}).token;
    },
  },
  http: driverHttp,
  router: driverRouter,
  refreshData: {
    url: '/api/auth/refresh', method: 'PUT', enabled: true, interval: 30,
  },
  fetchData: {
    url: '/api/auth/current', method: 'GET', enabled: true,
  },
  loginData: {
    url: '/api/auth/login', method: 'POST', redirect: '/', fetchUser: true,
  },
  logoutData: {
    url: '/api/auth/logout', method: 'POST', redirect: '/', makeRequest: true,
  },
  authRedirect: { path: '/login' },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
