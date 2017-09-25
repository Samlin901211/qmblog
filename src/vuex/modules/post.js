const state = {
    markdown: '',
    preview: ''
}

const mutations = {
    setMarkdown(state, md) {
        state.markdown = md
    },
    setPreview(state, html) {
        state.preview = html
    }
}

export default {
    namespaced: true,
    state,
    mutations
}