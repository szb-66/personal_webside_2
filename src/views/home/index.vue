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
                    <video src="../../assets/video/home_video.mp4" style="width: 100%;border-radius: 16px;" loop autoplay
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
                </el-col>
            </el-row>
            <!-- <iframe id="myVideo" src="https://player.bilibili.com/player.html?aid=52761282&bvid=BV1r441177ay&cid=92329566&page=1&high_quality=1&autoplay=1&loop=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" auto> </iframe> -->
            <!-- <iframe src="//player.bilibili.com/player.html?aid=52761282&bvid=BV1r441177ay&cid=92329566&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe> -->
            <!-- <video preload="auto" src="blob:https://www.bilibili.com/ceb91e27-3e60-4d9c-8ca1-dd615cd8ec81" loop autoplay></video> -->
        </div>

</template>

<script setup>
import jiNeng from './jiNeng.vue'
import Buttom from './bottom.vue'
import Nav from './nav.vue'
import About from './about.vue'


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

        .right {}

    }
    .el-row {
        margin-bottom: 1rem;
        margin-left: -10px;
        margin-right: -10px;
    }
}



</style>