<template>
    <div class="scene">
        <div class="card" :style="cardStyle" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
            <p class="time">{{ greeting }}我是</p>
            <!-- 网络上的emoj表情 -->
            <h2>施志标</h2>
            <p class="text">这里有我的工作<strong>项目复盘</strong>，一些关于<strong>设计</strong>、<strong>开发</strong>的个人知识库整理</p>
            <p class="text">很高兴认识你</p>
            <div class="more-info">
                <img src="../../assets/images/githubBlue.png" width="32" height="32" @click="goGithub()" />
                <img src="../../assets/images/bilibiliBlue.png" width="32" height="32" @click="goBilibili()" />
                <div class="more-info-text" @click="goAbout()">
                    <img src="../../assets/images/right.png" width="16" height="16" />
                    了解更多
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

// 获取时间
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
// 跳转到about页面
const goAbout = () => {
    // 路由跳转到about页
    router.push('/about');
}

// 控制卡片旋转
const rotateX = ref(0);
const rotateY = ref(0);
const onMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // 旋转角度，修改后面的变量可以控制旋转的幅度
    rotateX.value = (y / rect.height - 0.5) * -8;
    rotateY.value = (x / rect.width - 0.5) * 8;
};
const onMouseLeave = () => {
    rotateX.value = 0
    rotateY.value = 0
};
const cardStyle = computed(() => ({
    '--rotate-x': rotateX.value,
    '--rotate-y': rotateY.value,
}))


</script>
  
<style lang="less" scoped>
.scene {
    // 给场景添加透视效果
    perspective: 600px;
}

.card {
    padding: 24px;
    background-color: #576BF1;
    border-radius: 16px;
    text-align: left;
    color: #fff;
    transition: all .3s;
    // 普通指针
    cursor: default;
    // 告诉浏览器给卡片添加3D效果
    will-change: transform;

    &:hover {
        // 鼠标移入时，给卡片添加旋转效果
        transform-style: preserve-3d;
        transform: rotateX(calc(var(--rotate-x)*1deg)) rotateY(calc(var(--rotate-y)*1deg)) scale(1.05);
        // 鼠标移入时，给卡片添加阴影效果
        box-shadow: 0px 4px 16px rgba(24, 46, 162, 0.5);
    }

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