
import axios from 'axios'

const state = {
    fetching: 0,
    data: []
}

const mutations = {
    sendRequest(state) {
        state.fetching = 1
    },
    updateList(state, data) {
        state.data = data
    },
    failed(state) {
        state.fetching = 0
    }
}

const actions = {
    getList(ctx) {
        let data = [
            {
                id: 1,
                title: 'ELSONTEST',
                content: '你瞅啥'
            },
            {
                id: 2,
                title: 'TINYTEST',
                content: '瞅你咋地'
            }
        ]

        // axios.get('').then((data) => {
        //     console.log(data);
        // });

        ctx.commit('updateList', data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}