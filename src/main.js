import Vue from 'vue'
import router from './router'

// https://github.com/ElemeFE/element/blob/dev/components.json
import {Menu, Submenu, MenuItem, MenuItemGroup, Row, Col} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Index from './components/Index.vue'


Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)

new Vue({router}).$mount('#app')