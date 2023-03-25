<template>
    <div class="item">
        <div class="item-title" @click="toggleExpand(item)">
            <span>
                {{ item.text }}
            </span>
            <el-icon v-if="item.children && item.children.length > 0" :size="14" color="var(--text-3)">
                <template v-if="item.isExpanded">
                    <ArrowUp />
                </template>
                <template v-else>
                    <ArrowDown />
                </template>
            </el-icon>
        </div>
        <div class="item-content" v-if="item.children && item.isExpanded">
            <tree-item v-for="child in item.children" :key="child.id" :item="child"
                @toggle-expand="emitToggleExpand($event)"></tree-item>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, inject,watch,ref } from 'vue';
import { ElIcon } from 'element-plus';
import { ArrowUp, ArrowDown } from '@element-plus/icons-vue';
// import { watch } from 'fs';

const props = defineProps({
    item: Object,
});

const emit = defineEmits(['toggle-expand']);

// 目录显示开关
const toggleExpand = (item) => {
    item.isExpanded = !item.isExpanded;
};

const visibleSectionId = inject('visibleSectionId')

// item实例
const itemRef = ref(props.item);

// 事件监听，监听visibleSectionId的变化，如果变化的值和item的id相同，则展开，否则收起
watch(
  () => visibleSectionId.value,
  (newVisibleSectionId) => {
    if (newVisibleSectionId) {
      if (itemRef.value.id === newVisibleSectionId) {
        itemRef.value.isExpanded = true;
      } else {
        itemRef.value.isExpanded = false;
      }
    }
  }
);
</script>












<style lang="less" scoped>
.item {
    // padding: 1rem 0;
    // line-height: 150%;
    
    .item-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 0.8rem;
        // 过渡
        transition: all 0.3s;
        gap: 1rem;
        span{
            // 不换行，超出部分显示省略号
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &:hover{
            cursor: pointer;
            background-color: var(--blue);
            color: var(--white);
        }
    }
}
</style>
  