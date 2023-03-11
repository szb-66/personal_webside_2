<template>
    <div class="xinXi">
        <Top class="one"></Top>
        <Bottom class="two"></Bottom>
    </div>
</template>

<script setup>
import Top from './top.vue'
import Bottom from './bottom.vue'

</script>

<style lang="less" scoped>
.xinXi{
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .one{
        flex:2;
    }
    .two{
        flex:1
    }
}
</style>