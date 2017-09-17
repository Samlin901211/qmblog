<template>
    <el-row>
        <el-col :span="24">
            <el-menu theme="dark" :router="isRouter" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" :route="{path: '/'}">qmblog</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">文章列表</template>
                    <el-menu-item index="2-1" :route="{path: '/page/1'}">文章1</el-menu-item>
                    <el-menu-item index="2-2" :route="{path: '/page/2'}">文章2</el-menu-item>
                    <el-menu-item index="2-3" :route="{path: '/page/3'}">文章3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">
                    <a href="https://y.qq.com" target="_blank">关于我们</a>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            isRouter: true,
            activeIndex: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
