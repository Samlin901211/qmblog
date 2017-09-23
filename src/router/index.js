import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/Index.vue'
import Page from '../views/Page.vue'

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index
        }, {
            path: '/page/:id',
            component: Page
        }
    ]
})