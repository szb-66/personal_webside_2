<template>
    <div class="container">
        <div class="item" v-for="(item, index) in workExp" :key="index">
            <div class="circle">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0067FF" />
                    <circle cx="10" cy="10" r="3" fill="white" />
                </svg>
            </div>
            <!-- <div class="text">{{ item }}</div> -->
            <div class="company">
                <div class="company-and-time">
                    <div class="company-name">{{ item.company }}</div>
                    <div class="company-time">{{ item.time }}</div>
                </div>
                <div class="duty">
                    <div class="yuan"></div>
                    <div style="color: #666666;">{{ item.duty }}</div>
                </div>
                <div class="fuzeneirong">负责内容</div>
                <div class="company-duty">{{ item.content }} </div>
                <hr color='#EAEAEA' v-if="xiantiao_work(index)">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import workExp from '../../assets/data/workExp.json'

const items = ['Item 1', 'Item 2', 'Item 3'];
// 线条的高度自适应内容高度
onMounted(() => {
    nextTick(() => {
        const items = document.querySelectorAll('.item');
        let styleContent = '';
        items.forEach((item, index) => {
            const circle = item.querySelector('.circle');
            const text = item.querySelector('.company');
            styleContent += `
  .item:nth-child(${index + 1}) .circle::after {
    height: ${text.offsetHeight}px !important;
  }
`;
        });
        const style = document.createElement('style');
        style.textContent = styleContent;
        document.head.appendChild(style);
    });
});

// 最后一条线条隐藏
function xiantiao_work(index) {
    if (index < workExp.length - 1) {
        return true
    }
    else {
        return false
    }
}
</script>

<style scoped lang="less">
.container {
    .item {
        display: flex;
        // align-items: center;

        .circle {
            // width: 10px;
            // height: 10px;
            border-radius: 50%;
            // background-color: black;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                top: 20px;
                left: 9px;
                width: 2px;
                height: 20px;
                background-color: var(--blue-op20)
            }
        }

        .company {
            margin-left: 10px
        }
    }

    .item:last-child>.circle {
        &:after {
            display: none;
        }
    }
}

.company {
    .company-and-time {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .company-name {
            font-size: 18px;
            font-weight: 600;
        }

        .company-time {
            color: #666666;
            font-size: 14px;
        }
    }

    .duty {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-top: 8px;

        .yuan {
            width: 8px;
            height: 8px;
            background-color: #3278FF;
            border-radius: 8px;
        }
    }

    .fuzeneirong {
        font-weight: 600;
        color: #333;
        margin-top: 16px;
    }

    .company-duty {
        line-height: 1.5em;
        color: #666666;
        margin-top: 8px;

    }

    hr {
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>