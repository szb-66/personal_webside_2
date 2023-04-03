<template>
    <div>
        <TitleBar>
            <!-- 标题、tags、发布时间、类型 -->
            <div class="article-info">
                <div class="tags">
                    <span v-for="(tag, index) in article.tags" :key="index">{{ tag }}</span>
                </div>
                <h1>{{ article.title }}</h1>
                <div class="article-info-three">
                    <div class="publish-time">
                        <el-icon>
                            <Clock />
                        </el-icon>
                        <span>{{ article.created_at }}</span>
                    </div>
                    <div class="type">
                        <el-icon>
                            <MessageBox />
                        </el-icon>
                        <span>{{ article.type }}</span>
                    </div>
                </div>
            </div>
        </TitleBar>
        <div class="main">
            <!-- el栅格系统 -->
            <el-row :gutter="16">
                <el-col :span="19">
                    <div class="content_bg">
                        <div v-html="processedContent.value" class="content" @scroll="onScroll" ref="content"></div>
                    </div>
                </el-col>
                <el-col :span="5">
                    <About></About>
                    <RecentArticle style="margin-top: 1rem;"></RecentArticle>
                    <Catalog :data="catalog" v-if="catalog.length > 0 ? true : false" :visibleSectionId="visibleSectionId">
                    </Catalog>
                </el-col>
            </el-row>
        </div>
    </div>
</template>



<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router'
import { ref, watch, onMounted, computed, provide, queuePostFlushCb } from 'vue'
import TitleBar from './TitleBar.vue'
import About from '../../components/about.vue'
import Catalog from './Catalog2.vue'
import RecentArticle from '../../components/RecentArticle.vue';

// 接受路由传过来的id
const route = useRoute()
const id = route.params.id

const article = ref({})// 文章
const catalog = ref([])// 目录
const processedContent = ref('loading')// 显示的文章内容
const visibleSectionId = ref(null);// 当前显示的标题id

// 依赖注入
provide('visibleSectionId', visibleSectionId)

watch(() => route.params.id, async (newId, oldId) => {
    if (newId !== oldId) {
    const response = await axios.get(`https://szb.design:3000/api/articles/catalog/${newId}`);
    catalog.value = buildTree(response.data);

    const res = await axios.get(`https://szb.design:3000/api/articles/id/${newId}`);
    article.value = res.data;

    processedContent.value = computed(() => processContent(article.value.content, catalog.value.slice()));

    document.title = `${article.value.title}-施志标`
  }
},{
    immediate:true,
    deep:true
});

// 异步数据请求
onMounted(async () => {
    // 监听滚动事件判断当前标题
    window.addEventListener('scroll', handleScroll);
});


// 递归构建树函数
const buildTree = (data, parentLevel = 0) => {
    const result = [];

    while (data.length > 0) {
        const item = data.shift();

        if (item.level === parentLevel + 1) {
            result.push(item);
            item.children = buildTree(data, item.level);
        } else {
            data.unshift(item);
            break;
        }
    }

    return result;
};

// 将id放入内容的函数
const processContent = (content, catalog) => {
    if (!content || !catalog) {
        return content;
    }
    let modifiedContent = content;
    let catalogItems = catalog.flatMap(item => {
        if (item.children) {
            return [item, ...item.children];
        } else {
            return item;
        }
    });
    for (const item of catalogItems) {
        const tagRegex = new RegExp(`<h${item.level}[^>]*>${item.text}<`, 'i');
        modifiedContent = modifiedContent.replace(tagRegex, `<h${item.level} id="${item.id}">${item.text}<`);
    }

    return modifiedContent;
};

// 判断当前显示的标题函数
const handleScroll = () => {
    const sections = document.querySelectorAll('h1,h2'); // 根据您的实际内容元素选择器进行更改
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let currentVisibleSection = null;

    for (const section of sections) {
        if (section.offsetTop <= scrollTop - 240 + window.innerHeight / 2) {
            currentVisibleSection = section;
        } else {
            break;
        }
    }

    if (currentVisibleSection) {
        visibleSectionId.value = currentVisibleSection.id;
    } else {
        visibleSectionId.value = null;
    }
};



</script>




<style lang="less" scoped>
.article-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    // align-items: center;
    color: #fff;
    margin-top: 40px;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        span {
            padding: 0.2rem 0.5rem;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 0.2);
        }
    }

    .article-info-three {
        display: flex;
        gap: 2rem;

        .publish-time {
            margin: 0;
            padding: 0;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.2rem;
        }

        .type {
            margin: 0;
            padding: 0;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.2rem;
        }
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
        border: 1px solid var(--border);

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
}</style>