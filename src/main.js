import Vue from 'vue'
import router from './router'
import store from './vuex/store'

// https://github.com/ElemeFE/element/blob/dev/components.json
import {Menu, Submenu, MenuItem, MenuItemGroup, Row, Col} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)

new Vue({
  router,
  store
}).$mount('#app')