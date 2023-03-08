<template>
    <div class="card">
        <p class="time">{{ greeting }}我是</p>
        <!-- 网络上的emoj表情 -->
        <h2>施志标</h2>
        <p class="text">这里有我的工作<strong>项目复盘</strong>，一些关于<strong>设计</strong>、<strong>开发</strong>的个人知识库整理</p>
        <p class="text">很高兴认识你</p>
        <div class="more-info">
            <img src="../../assets/images/githubBlue.png"  width="32" height="32" @click="goGithub()" />
            <img src="../../assets/images/bilibiliBlue.png"  width="32" height="32" @click="goBilibili()"/>
            <div class="more-info-text">
                <img src="../../assets/images/right.png"  width="16" height="16" />
                了解更多
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { computed } from 'vue'

const greeting = computed(() => {
    const hour = new Date().getHours()
    if (hour >= 0 && hour <= 5) {
        return '凌晨好！'
    } else if (hour >= 6 && hour <= 11) {
        return '上午好！'
    } else if (hour >= 12 && hour <= 17) {
        return '下午好！'
    } else {
        return '晚上好！'
    }
})

// 跳转到github
const goGithub = () => {
    window.open('https://github.com/szb-66?tab=repositories')
}
// 跳转到bilibili
const goBilibili = () => {
    window.open('https://space.bilibili.com/268636758')
}

</script>
  
<style lang="less" scoped>
.card {
    padding: 24px;
    background-color: #576BF1;
    border-radius: 16px;
    text-align: left;
    color: #fff;

    .time {
        display: inline-block;
        padding: 8px 12px;
        background-color: rgba(255, 255, 255, 0.16);
        border-radius: 12px;
        font-size: 14px;
    }

    h2 {
        font-size: 38px;
        margin: 24px 0 0 0;
    }

    .text {
        line-height: 1.5;
        margin: 24px 0;
        color: #DADEFC;

        strong {
            color: #fff;
        }
    }

    .more-info {
        display: flex;
        align-items: center;

        img {
            margin-right: 8px;
            cursor: pointer;
        }

        .more-info-text {
            margin-left: auto;
            font-size: 16px;
            padding: 8px 12px;
            background-color: rgba(255, 255, 255, 0.16);
            border-radius: 20px;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }
}</style>