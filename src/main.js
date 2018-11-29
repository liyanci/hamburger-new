// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/animate.css/animate.min.css'
import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
import router from './router/index.js'
import store from './store/index.js'


//引入axios
import Axios from 'axios'
//请求拦截
Axios.interceptors.response.use(function (response) {
    // Do something with response data
//     console.log(1111);
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
 Vue.prototype.$axios=Axios
  
  Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
