import Vue from 'vue'
import router from './router'
import store from './vuex/store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import App from './views/App.vue'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})