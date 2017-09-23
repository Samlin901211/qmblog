<template>
    <div>
        <Navigation />
        <el-row>
            <el-col :span="4"></el-col>
            <el-col :span="8">
                <ul>
                    <li v-for="article in data" :key="article.id">
                        <h2>{{article.title}}</h2>
                        <p>{{article.content}}</p>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
    
</template>

<script>
import Navigation from './components/Navigation.vue'
import {mapState, mapActions} from 'Vuex'

export default {
    name: 'Index',
    components: {
        Navigation
    },
    computed: {
        ...mapState('list', {
            data: state => state.data
        })
    },
    methods: {
        add() {
            let val = this.$el.querySelector('.js_input').value;
            this.$store.commit('increment', {
                count: val
            });
        },
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
