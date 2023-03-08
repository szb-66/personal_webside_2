<template>
    <div class="main">
        <!-- 第一行 -->
        <el-row :gutter="20">
            <!-- 左 -->
            <el-col :span="11" class="topBox">
                <!-- 上 -->
                <jiNeng class="top"></jiNeng>
                <!-- 下 -->
                <Buttom></Buttom>
            </el-col>
            <!-- 右 -->
            <el-col :span="13">
                <!-- autoplay -->
                <video src="../../assets/video/home_video.mp4" style="width: 100%;border-radius: 16px;" loop autoplay
                    muted></video>
            </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="20" class="row_two">
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
    </div>
</template>

<script setup>
import jiNeng from './jiNeng.vue'
import Buttom from './buttom.vue'
import Nav from './nav.vue'
import About from './about.vue'
import { ref } from 'vue';

</script>

<style lang="less" scoped>
.main {
    margin-top: 70px;
    padding: 0 1.5rem;

    .topBox {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .top {
            flex: 7;
        }



    }

    .row_two {

        .right {
        }

    }
}

.el-row {
    margin-bottom: 20px;
    margin-left: -10px;
    margin-right: -10px;
}

</style>