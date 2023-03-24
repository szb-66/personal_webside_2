<template>
        <TitleBar>
            <!-- 标题、tags、发布时间、类型 -->
            <div class="article-info">
                <h1>{{ article.title }}</h1>
                <div class="tags">
                    <span v-for="(tag, index) in article.tags" :key="index">{{ tag }}</span>
                </div>
                <div class="publish-time">{{ article.created_at }}</div>
                <div class="type">{{ article.type }}</div>
            </div>
        </TitleBar>
        <div class="main">
            <!-- el栅格系统 -->
            <el-row :gutter="16">
                <el-col :span="19">
                    <div class="content_bg">
                        <div v-html="article.content" class="content" @scroll="onScroll" ref="content"></div>
                    </div>
                </el-col>
                <el-col :span="5">
                    <About></About>
                    <Catalog :id="id"></Catalog>
                </el-col>
            </el-row>
        </div>
</template>



<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import TitleBar from './TitleBar.vue'
import About from '../../components/about.vue'
import Catalog from './Catalog.vue'



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
// 发送请求文章目录
axios.get('http://localhost:3000/api/articles/catalog/' + id)
    .then(res => {
        // console.log(res.data[0])
    })
    .catch(err => {
        console.log(err)
    })


</script>




<style lang="less" scoped>
.article-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;

        span {
            margin: 0 0.5rem;
            padding: 0.2rem 0.5rem;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 0.2);
        }
    }

    .publish-time {
        margin: 0;
        padding: 0;
        font-size: 0.8rem;
    }

    .type {
        margin: 0;
        padding: 0;
        font-size: 0.8rem;
    }
}

.main {
    margin: 1rem auto;
    padding: 0 1rem;
    max-width: 1440px;

    .content_bg {
        margin: 0 auto;
        padding: 2rem;
        background-color: #fff;
        border-radius: 10px;
        line-height: 180%;

        ::v-deep h1,
        ::v-deep h2,
        ::v-deep h3,
        ::v-deep h4,
        ::v-deep h5,
        ::v-deep h6 {
            line-height: 300%;
            font-weight: 600;
        }
    }
}
</style>