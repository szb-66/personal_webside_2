<template>
    <TitleBar></TitleBar>
    <div class="main">
<!--         <div class="titleBar">
            <div class="title">{{ article.title }}</div>
            <div class="info">
                <div class="tag" v-for="(tag,index) in article.tags" :id="index">{{ tag }}</div>
                <div class="time">{{ article.creatd_at }}</div>
            </div>
        </div> -->
    </div>
</template>




<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import TitleBar from './TitleBar.vue'

// 接受路由传过来的id
const route = useRoute()
const id = route.params.id

// 文章
const article = ref({})

// 发送请求获取文章详情
axios.get('http://localhost:3000/api/articles/' + id)
    .then(res => {
        // console.log(res.data)
        article.value = res.data
    })
    .catch(err => {
        console.log(err)
    })

</script>




<style lang="less" scoped>
.main {
    margin-top: 70px;
    padding: 0 1.5rem;
}
</style>