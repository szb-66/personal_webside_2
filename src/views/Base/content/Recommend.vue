<template>
    <div class="recommend">
        <div class="Title">
            推荐文章
        </div>
        <el-row :gutter="16">
            <el-col :span="12" v-for="(article, index) in articles" :id="index" class="item">
                <Article :article="article"></Article>
            </el-col>
        </el-row>
    </div>
</template>




<script setup>
import { ref, onMounted, watch, reactive } from 'vue'
import Article from '../../../components/Article.vue'
import { getRandomArticles } from '@/utils/content'

// 从本地 markdown 获取随机推荐文章
let articles = ref(getRandomArticles(3))

</script>




<style lang="less" scoped>
.recommend {
    background-color: var(--white);
    border: 1px solid var(--border);
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 2rem;

    .Title {
        margin: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
    .item{
        margin-bottom: 1rem;
    }
}
</style>