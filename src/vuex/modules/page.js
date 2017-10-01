import axios from 'axios'

// 数据
const state = {
    id: '',
    title: '',
    author: '',
    tags: [],
    content: '',
    time: ''
}

// 改变方法
const mutations = {
    setState (state, data) {
        console.log(data);
        state.id = data.id;
        state.title = data.title;
        state.author = data.author;
        state.tags = data.tags;
        state.content = data.content;
        state.time = data.time;
    }
}

const actions = {
    // 获取文章
    getPage (ctx) {
        let data = {
            id: '1',
            title: '这是一篇文档',
            author: 'eric',
            tags: ['javascript','文档'],
            content: [
                "## 搭建环境",
                
                "vue-cli搭建环境。使用webpack来进行集成，主要webpack是主流，而且网上教程一堆。",
                
                "vue-loader 用来将.vue预编译成js",
                
                "vue-router 路由器",
                
                "babel-loader 用来解析es6语法。",
                
                "webpack-dev-server 用来搭建小型服务器的，以output里面的path来作为根目录。",
                
                "vuex 一个状态管理的模式，他是集中管理组件状态的一个组件。并以相应的规则保证状态以一种可预测的方式发生变化，",
                
                
                
                "### webpack 可以将所有的东西都当成模块来使用",
                
                "- entry 入口",
                "- output 输出",
                "- loader 加载器，他们是运行在node里面的函数，资源文件是他的参数，返回新的文件。",
                "- plugin 插件，能做到loader无法做到的事情。插件可以在任何周期被其他对象调用，因为插件可以携带参数和选项，所以需要new一个对象来使用。",
                "- resolve 定义如何被解析，https://doc.webpack-china.org/configuration/resolve/#resolve",
                "- dev-server 通过来自 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 的这些选项，能够用多种方式改变其行为。这里有一个简单的例子，所有来自 `dist/` 目录的文件都做 gzip 压缩和提供为服务",
                
                "### 一些插件",
                
                "- ExtractTextPlugin 可以将js里面的css抽象出来，单独生成一个样式文件t通过link引入。",
                "- HtmlWebpackPlugin 自动生成一个html代码，配置https://github.com/jantimon/html-webpack-plugin#configuration。",
                
                
                
                "#### state",
                
                "- mapState 返回一个map的对象，对state来做处理，并且对做处理。如果只是相同的，那么直接返回",
                
                "#### Getters",
                
                "- 有时候我们需要从 store 中的 state 中派生出一些状态",
                
                "#### mutation",
                
                "- 用户修改status的方法",
                
                "#### action",
                
                "* 用来改变status，单不直接调用而是用调动mutations来调用",
                
                "#### Modules",
                
                "* 使用模块来处理Modules，这样每个模块都有自己的状态管理系统。",
                "* 组件使用状态的时候，都要用使用不同的。"].join('\n'),
            time: '2017-10-1'
        }
        
        console.log(data);
        ctx.commit('setState', data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}