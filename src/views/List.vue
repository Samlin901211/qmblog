<template>
    <v-list two-line>
        <template v-for="item in data">
            <v-list-tile avatar :key="item.id" to="/page/1">
                <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.content"></v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-list>
</template>

<script>
import { mapState, mapActions } from 'Vuex'

export default {
    name: 'List',
    components: {
    },
    computed: {
        ...mapState('list', {
            data: state => state.data
        })
    },
    methods: {
        ...mapActions('list', [
            'getList'
        ])
    },
    created() {
        this.getList()
    }
}
</script>

<style>

</style>
