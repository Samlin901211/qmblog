import Vue from 'vue'
import Router from 'vue-router'

import List from '../views/List.vue'
import Page from '../views/Page.vue'
import Editor from '../views/components/Editor.vue'
import Editor2 from '../views/components/Editor2.vue'

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            component: List
        }, {
            path: '/page/:id',
            component: Page
        }, {
            path: '/edit',
            component: Editor
        }, {
            path: '/edit2',
            component: Editor2
        }
    ]
})