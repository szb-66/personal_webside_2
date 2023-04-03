<template>
    <div class="main">
        <el-row class="row1" :gutter="16">
            <el-col :span="15" class="col">
                <Me></Me>
            </el-col>
            <el-col :span="9">
                <ZhuiQiu></ZhuiQiu>
            </el-col>
        </el-row>
        <el-row class="row2" :gutter="16">
            <el-col :span="12" class="col">
                <JiNeng></JiNeng>
            </el-col>
            <el-col :span="12">
                <ShengYa></ShengYa>
            </el-col>
        </el-row>
        <el-row class="row3" :gutter="16">
            <el-col :span="15" class="col">
                <XingGe></XingGe>
            </el-col>
            <el-col :span="9">
                <YouXi></YouXi>
            </el-col>
        </el-row>
        <el-row class="row4" :gutter="16">
            <el-col :span="9" class="col">
                <ZuoYouMing></ZuoYouMing>
            </el-col>
            <el-col :span="15">
                <TeChang></TeChang>
            </el-col>
        </el-row>
        <el-row class="row5" :gutter="16">
            <el-col :span="15" class="col">
                <XinXi></XinXi>
            </el-col>
            <el-col :span="9">
                <ZhaoPian></ZhaoPian>
            </el-col>
        </el-row>
        <el-row class="row6" :gutter="16">
            <el-col :span="12" class="col">
                <objectExp></objectExp>
            </el-col>
            <el-col :span="12" class="col">
                <WorkExp></WorkExp>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import Me from './me.vue'
import ZhuiQiu from './zhuiQiu.vue'
import JiNeng from './jiNeng/jiNeng.vue'
import ShengYa from './shengYa.vue'
import XingGe from './xingGe.vue'
import YouXi from './youXi.vue'
import ZuoYouMing from './zuoYouMing.vue'
import TeChang from './teChang.vue'
import XinXi from './xinXi/xinXi.vue'
import ZhaoPian from './zhaoPian.vue'
import WorkExp from './workExp.vue'
import objectExp from './projectExp.vue'

// 页面biaot
document.title = '关于我-施志标'

</script>

<style lang="less" scoped>
.main {
    padding: 0 1.5rem;
    max-width: 1440px;
    margin: 70px auto 0 auto;

    .col{
        height: 100%;
    }
    .row1 {
        margin-bottom: 1rem;
        height: 200px;
        display: flex;
    }

    .row2 {
        margin-bottom: 1rem;
        height: 400px;

    }

    .row3 {
        margin-bottom: 1rem;
        height: 260px;
    }

    .row4 {
        margin-bottom: 1rem;
        height: 260px;
    }

    .row5 {
        margin-bottom: 1rem;
        height: 400px;
    }
    .row6 {
        margin-bottom: 1rem;
        height: 616px;
    }

}

</style>