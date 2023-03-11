<template>
    <Menu></Menu>
    <router-view class="main"></router-view>
</template>




<script setup>
import Menu from './components/menu.vue'


</script>




<style lang="less" scoped>
.main {
    max-width: 1440px;
    margin: 0 auto;
}
</style>
