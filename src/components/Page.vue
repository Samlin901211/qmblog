<template>
  <div>
    <Navigation />
    <h2 class="title">文章页面</h2>
    <p>页面id：{{$route.params.id}}</p>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
    name: 'Page',
    components: {
        Navigation
    }
}
</script>

<style lang="less" scoped>
.title {
    color: #999;
    a {
        text-decoration: none;
    }
}
</style>
