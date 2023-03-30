<template>
    <div class="article" @click="go(article.id)">
        <img :src="article.cover_img_url" class="cover">
        <div class="info">
            <div class="title">{{ article.title }}</div>
            <div class="info_twoRow">
                <div class="time">
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
            <div class="tags">
                <div v-for="(tag, i) in article.tags" :id="i">
                    <span>#</span><span>{{ tag }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 接收父组件传递的数据
const props = defineProps(['article'])

function go(id) {
    router.push({
        name: 'content',
        params: {
            id: id
        }
    })
}
</script>

<style lang="less" scoped>
.article {
    display: flex;
    gap: 2rem;
    padding: 0.4rem;
    // move
    transition: all 0.3s;
    // 垂直居中
    align-items: center;

    .cover {
        width: 12rem;
        height: 6.75rem;

        border-radius: 0.5rem;
        border: 1px solid var(--border);
        overflow: hidden;
    }

    &:hover {
        border-radius: 1rem;
        // border: 1px solid var(--border);
        background-color: var(--bgc);
        // 手指
        cursor: pointer;

        .title {
            color: var(--blue);
        }
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .info_twoRow {
            color: var(--text-3);
            display: flex;
            gap: 1rem;

            .time {
                display: flex;
                align-items: center;
                gap: 0.2em;
            }

            .type {
                display: flex;
                align-items: center;
                gap: 0.2rem;
            }

        }

        .title {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .tags {
            display: flex;
            gap: 0.5rem;
            color: var(--text-3);
        }
    }
}
</style>