<template>
    <div>
        <ul class="nav">
            <li v-for="(type, index) in types" :key="index" @click="getArticles(type, index)"
                :class="{ active: currentModule === index }">{{ type }}</li>
        </ul>
        <el-row :gutter="16">
            <el-col v-if="!loading" :span="12" v-for="(article, index) in articleList" :key="index" style="margin-bottom: 1rem;">
                <ArticleCard :article="article"></ArticleCard>
            </el-col>
            <Loading v-if="loading"></Loading>
        </el-row>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import ArticleCard from './card.vue'
import { getAllArticles, getTypes } from '@/utils/content'
import Loading from '../../components/Loading.vue'

const loading = ref(true) // 加载中
const types = ref(null);// 文章类型
const articleList = ref([]);// 文章列表
const currentModule = ref(0)// 选中的id

onMounted(async() => {
    // 获取分类 - 从本地 markdown 获取
    types.value = getTypes()
    // 获取第一类文章
    if (types.value.length > 0) {
        getArticles(types.value[0], 0)
    } else {
        loading.value = false
    }
});


// 获取分类中的文章信息
function getArticles(type, index) {
    loading.value = true
    // 从本地 markdown 获取文章
    const allArticles = getAllArticles()
    articleList.value = allArticles.filter(article => article.type === type)
    setTimeout(() => {
        loading.value = false
    }, 100)

    if (types.value && types.value.length > 0) {
        currentModule.value = index
    }
}

</script>





<style lang="less" scoped>
.nav {
    display: flex;
    text-align: left;
    height: 52px;
    line-height: 52px;
    background-color: var(--white);
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: 0 12px;
    margin-bottom: 1rem;
    align-items: flex-start;
    gap: 0.5em;
    align-items: center;
    transition: all 0.25s;

    &:hover {
        border: 1px solid var(--blue);
        box-shadow: var(--box-shadow);
    }

    li {
        padding: 0.4em 1em;
        font-weight: 700;
        border-radius: 1rem;
        line-height: 1rem;
        cursor: pointer;
        transition: all 0.25s;

        border: 1px solid transparent;

        &:hover:not(.active) {
            border: 1px solid var(--blue);
            color: var(--blue);
        }

        &.active {
            // 设置选中状态的样式
            background-color: var(--blue);
            color: var(--white);
        }
    }
}
</style>

<style>
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>