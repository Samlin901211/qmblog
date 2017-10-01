import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import page from './modules/page'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        // 列表
        list: list,
        // 文章
        page: page
    }
})