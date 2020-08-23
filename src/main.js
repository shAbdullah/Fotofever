import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'
import carousel from 'vue-owl-carousel'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(carousel)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
