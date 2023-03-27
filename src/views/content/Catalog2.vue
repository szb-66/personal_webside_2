<template>
    <!-- 分级目录 -->
    <div class="catalog" ref="fixedDiv" :class="{ fixed: isFixed }" :style="fixedStyle">
        <div class="catalog-title">
            目录
        </div>
        <!-- 目录内容 -->
        <div class="content">
                <div v-for="(item, index) in data" :id="index">
                    <div class="h1" @click="go(item.id)" :class="{ hover: item.id === visibleSectionId }">{{ item.text }}
                    </div>
                    <div v-if="show(item)">
                        <div v-for="(child, i) in item.children" :id="i">
                            <div class="h2" @click="go(child.id)" :class="{ hover: child.id === visibleSectionId }">{{
                                child.text }}</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted, ref, computed, watch, inject } from 'vue';


// 获取目录
const props = defineProps({
    data: Array,
    // visibleSectionId: String,
})

// 依赖注入
const visibleSectionId = inject('visibleSectionId')

// 添加点击事件
function go(id) {
    // 文章对应id的节点出现在屏幕
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center" });
}

// 判断是否显示
function show(item) {
    if (item.id == visibleSectionId.value) return true;
    for (let child of item.children) {
        if (child.id == visibleSectionId.value) return true;
    }
    return false;
}

// 智能浮动
const fixedDiv = ref(null);
const isFixed = ref(false);
// 获取fixedDiv到顶部的距离
onMounted(function () {
    let divOffsetTop = fixedDiv.value.offsetTop + 180;
    const onScroll = () => {
        if (!fixedDiv.value) return;
        // 获取滚动距离
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > divOffsetTop) {
            isFixed.value = true;
        } else {
            isFixed.value = false;
        }

    }
    window.addEventListener("scroll", onScroll)
})
// 让浮动菜单的宽度和左右位置保持不变
const fixedStyle = computed(() => {
    if (isFixed.value && fixedDiv.value) {
        const rect = fixedDiv.value.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(fixedDiv.value);
        return {
            width: `${rect.width}px`,
            left: `${rect.left}px`,
            marginLeft: computedStyle.marginLeft,
            marginRight: computedStyle.marginRight,
        };
    } else {
        return {};
    }
});

</script>











<style lang="less" scoped>
.catalog {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid var(--border);
    background-color: var(--white);

    .catalog-title {
        margin: 0 0 1rem 1rem;
        font-weight: 700;
    }
    
    .h1,
    .h2 {
        justify-content: space-between;
        padding: 1rem;
        border-radius: 0.8rem;

        // 不换行，超出部分显示省略号
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
            cursor: pointer;
            background-color: var(--blue);
            color: var(--white);
        }
    }
    .h2{
        color: var(--text-2);
    }
}

.hover {
    //这个类的优先级要高于普通样式
    background-color: var(--blue);
    color: var(--white)!important;
}

.fixed {
    position: fixed;
    top: 60px;
    // right: 0;
    z-index: 999;
}
</style>