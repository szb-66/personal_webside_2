<template>
    <div class="tags">
        <div class="tag" v-for="(tag,index) in tags" id="index">
{{ tag.tag }}
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router'
import { ref, watch, onMounted, computed, provide, queuePostFlushCb } from 'vue'

const tags = ref([]);
// 异步数据请求
onMounted(async () => {
    // 获取tags信息
    await axios.get(`https://szb.design:3000/api/tags`)
        .then(res => {
            // 属性：tag、count
            tags.value = res.data;
        })
        .catch(err => {
            console.log(err);
        })
});

</script>

<style lang="less" scoped>
.tags{
    border-radius: 1rem;
    border:1px solid var(--border);
    padding: 1rem;
    background-color: var(--white);

    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    .tag{
        font-size: small;
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        padding: 0.4rem;

        &:hover{
            background-color: var(--blue);
            color: var(--white);
            // 手指
            cursor: pointer;
        }
    }

}

</style>