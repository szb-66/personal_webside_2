<template>
        <div class="main">
            <!-- 第一行 -->
            <el-row :gutter="16">
                <!-- 左 -->
                <el-col :span="11" class="topBox">
                    <!-- 上 -->
                    <jiNeng class="top"></jiNeng>
                    <!-- 下 -->
                    <Buttom></Buttom>
                </el-col>
                <!-- 右 -->
                <el-col :span="13">
                    <video src="/video/home_video.mp4" style="width: 100%;border-radius: 16px;" loop autoplay
                        muted></video>
                </el-col>
            </el-row>
            <!-- 第二行 -->
            <el-row :gutter="16" class="row_two">
                <el-col :span="19" class="left">
                    <!-- 导航 -->
                    <Nav></Nav>
                    <!-- 内容 -->
                </el-col>
                <el-col :span="5" class="right">
                    <!-- 介绍 -->
                    <About></About>
                    <!-- 标签 -->
                    <Tags></Tags>
                </el-col>
            </el-row>
        </div>

</template>

<script setup>
import jiNeng from './jiNeng.vue'
import Buttom from './bottom.vue'
import Nav from './nav.vue'
import About from '../../components/about.vue'
import Tags from '../../components/Tags.vue'

// 页面biaot
document.title = '首页-施志标'


</script>

<style lang="less" scoped>
.main {
    padding: 0 1.5rem;
    max-width: 1440px;
    margin: 70px auto 0 auto;

    .topBox {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .top {
            flex: 7;
        }
    }

    .row_two {

        .right {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

    }
    .el-row {
        margin-bottom: 1.5rem;
        margin-left: -10px;
        margin-right: -10px;
    }
}



</style>