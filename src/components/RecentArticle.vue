<template>
    <div class="RecentArticle">
        <div class="title">
            <el-icon><IceTea /></el-icon>
            <span>
                最近文章
            </span>
        </div>
        <!-- 文章信息 -->
        <div class="articles">
            <div class="article" v-for="(article, index) in articles" :id="index" :key="index" @click="go(article.slug)">
                <img :src="article.cover" class="cover">
                <div class="articleInfo">
                    <div class="title2">{{ article.title }}</div>
                    <div class="time">{{ formatDate(article.date) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getLatestArticles, formatDate } from '@/utils/content'
const router = useRouter()
// 从本地 markdown 获取最新文章
const articles = ref([])
onMounted(() => {
    articles.value = getLatestArticles(5)
})

function go(slug) {
    router.push({
        name: 'content',
        params: {
            id: slug
        }
    })
}


</script>

<style lang="less" scoped>
.RecentArticle {
    background-color: var(--white);
    border-radius: 1rem;
    border: 1px solid var(--border);
    padding: 1rem;

    .title {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

    }

    .articles {
        .article {
            display: flex;
            gap: 1rem;
            // 垂直居中
            align-items: center;
            padding: 0.4rem;

            img {
                width: 106px;
                height: 60px;
                border-radius: 0.5rem;
                border: 1px solid var(--border);
            }

            .articleInfo {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                min-width: 0;//flexx布局下，父级宽度适应子元素，所以会出错，添加宽度就不会出错了
                
                .title2 {
                    font-size: 1rem;
                    // 不换行，超出部分显示省略号
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .time {
                    font-size: 0.8rem;
                    color: var(--text-3);
                }

            }
            &:hover{
                background-color: var(--bgc);
                cursor: pointer;
                .title2{
                    color: var(--blue);
                }
            }
        }

    }
}
</style>