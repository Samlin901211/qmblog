<template>
  <div>
    <h2 class="title">文章页面</h2>
    <p>页面id：{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
    name: 'Page',
    components: {
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
