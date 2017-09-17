import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index.vue'
import Page from '../components/Page.vue'

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