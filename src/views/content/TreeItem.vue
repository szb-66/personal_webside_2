<template>
    <div class="item">
        <div class="item-title" @click="toggleExpand(item)">
            {{ item.text }}
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
import { defineProps, defineEmits } from 'vue';
import { ElIcon } from 'element-plus';
import { ArrowUp, ArrowDown } from '@element-plus/icons-vue';

const props = defineProps({
    item: Object,
});

const emit = defineEmits(['toggle-expand']);

const toggleExpand = (item) => {
    item.isExpanded = !item.isExpanded;
};

</script>

<style scoped>
.item {
    margin: 2rem 0;
}

.item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
  