<template>
    <div class="card" @click="goContent" :id="article.id">
        <!-- 封面 -->
        <div class="cover">
            <img :src="article.cover_img_url" alt="封面图片" />
        </div>
        <!-- 文字内容 -->
        <div class="content">
            <h2>{{ article.title }}</h2>
            <div class="info">
                <!-- 标签 -->
                <div class="tags">
                    <span v-for="(tag, index) in article.tags" :key="index" class="tag">
                        <span>#</span>
                        <span>{{ tag }}</span>
                    </span>
                </div>
                <!-- 发布日期 -->
                <div class="date">{{ article.created_at }}</div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// 获取父级传过来的卡片数据
const props = defineProps({
    article: Object
})

// 跳转到文章详情页
const goContent = () => {
    router.push({
        name: 'content',
        params: {
            id: props.article.id
        }
    })
}

</script>
  
<style lang="less" scoped>
.card {
    border-radius: 16px;
    border: 1px solid var(--border);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: var(--text-3);
    background-color: var(--white);

    .cover {
        overflow: hidden;
        border-radius: 16px 16px 0 0;
        border-bottom: 1px solid var(--border);

        img {
            display: block;
            width: 100%;
            height: auto;
            // 缓入缓出动画
            transition: all 0.4s ease-in-out;
        }
    }

    .content {
        // 左对齐
        text-align: left;
        padding: 1rem;

        h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 1rem;
            transition: all 0.1s ease-in;
            color: var(--text-1);
            // 不换行，超出部分显示省略号
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .info {
            display: flex;
            // 左右分布
            justify-content: space-between;

            .tags {
                display: flex;
                gap: 12px;
                // 垂直对齐
                align-items: center;
                margin-right: 0.5rem;
                overflow: hidden;

                .tag {
                    // 不换行，超出部分显示省略号
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .date {
                // 不换行
                white-space: nowrap;
            }
        }

    }

    &:hover {
        border: 1px solid var(--blue);
        box-shadow: var(--box-shadow);

        h2 {
            color: var(--blue);

        }

        .cover img {
            transform: scale(1.05);
            transform-origin: center;
        }
    }
}
</style>