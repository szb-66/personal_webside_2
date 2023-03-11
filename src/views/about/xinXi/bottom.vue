<template>
    <div class="bottom">
        <div v-for="(item, i) in data" :key="i" class="one">
            <div>{{ item.title }}</div>
            <strong :style="{ color: item.color }" class="content">{{ item.content }}</strong>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        title: "生于",
        content: "1998",
        color: "#43A6C6"
    },
    {
        title: "集美大学",
        content: "美术与设计学院",
        color: "#C69043"
    },
    {
        title: "现在职业",
        content: "UI/UX",
        color: "#B04FE6"
    }
]

</script>

<style lang="less" scoped>
.bottom {
    width: 100%;
    height: 100px;
    background-color: var(--white);
    border-radius: 1rem;
    border: 1px solid var(--border);
    display: flex;
    padding: 0 3rem;
    justify-content: space-between;
    // 垂直居中
    align-items: center;
    .one {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .content {
            font-size: 2rem;
            // 不换行，超出部分用省略号代替
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>