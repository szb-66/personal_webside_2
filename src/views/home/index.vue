<template>
    <div class="main">
        <!-- 通知 -->
        <div class="message">
            <svg t="1681449960302" class="icon" viewBox="0 0 1059 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2642" width="16" height="16"><path d="M648.490101 1013.692421 648.490101 943.34831C844.095194 897.066596 989.80068 721.769482 989.80068 512 989.80068 302.264649 844.095194 126.967535 648.490101 80.65169L648.490101 34.165189 648.490101 10.341711C882.151323 57.783881 1058.062796 264.345044 1058.062796 512 1058.062796 759.689087 882.151323 966.25025 648.490101 1013.692421ZM68.262116 716.786348C30.547297 716.786348 0 686.239051 0 648.524232L0 375.475768C0 337.79508 30.547297 307.213652 68.262116 307.213652L238.917406 307.213652 546.096927 0.034131 546.096927 1023.965869 238.917406 716.786348 68.262116 716.786348ZM477.834811 853.34471 477.834811 170.723552 273.048463 375.509899 68.262116 375.509899 68.262116 648.558363 273.048463 648.558363 477.834811 853.34471ZM819.14539 494.934471C819.14539 612.550097 749.040197 713.543897 648.490101 759.108859L648.490101 681.392441C709.926005 641.936938 750.883274 573.401773 750.883274 494.934471 750.883274 416.5013 709.926005 347.966136 648.490101 308.510633L648.490101 230.794214C749.040197 276.359176 819.14539 377.352976 819.14539 494.934471Z" fill="#272636" p-id="2643"></path></svg>
            <div class="text">
                网站目前没有对移动端进行适配，预计在知识库文章同步完成后进行。
            </div>
        </div>
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
                <!-- <video src="/video/home_video.mp4" style="width: 100%;border-radius: 16px;" loop autoplay
                        muted></video> -->
                <welcome></welcome>
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
import welcome from './Welcome.vue'

// 页面biaot
document.title = '首页-施志标'


</script>

<style lang="less" scoped>
.main {
    padding: 0 1.5rem;
    max-width: 1440px;
    margin: 70px auto 0 auto;

    .message {
        background-color: #fff;
        border-radius: 0.5rem;
        border: 1px solid var(--border);
        padding: 1rem;
        margin-bottom: 1.5rem;
        display: flex;
        gap: 1rem;
        align-items: center;

        .text {
            color: var(--text-2);
            font-size: 14px;
        }
        .icon{
            fill: var(--text-2);

        }
    }

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