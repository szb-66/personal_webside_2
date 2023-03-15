<template>
    <!-- 工作经历 -->
    <div class="work-exp">
        <!-- 标题 -->
        <div class="exp-title">
            <div class="zhaungshi"></div>
            <div class="title">工作经历</div>
        </div>
        <div v-if="scrollTop > 0" class="top-shadow"></div>
        <div v-if="!isBottom" class="bottom-shadow"></div>
        <div class="container" @scroll="handleScroll">
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
                    <!-- <hr color='#E3E8F7' v-if="xiantiao_work(index)"> -->
                </div>
            </div>
        </div>
    </div>
</template>





<script setup>
import { onMounted, nextTick, ref } from 'vue';
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

// 阴影滚动区
const scrollTop = ref(0)
const isBottom = ref(false)
const handleScroll = (e) => {
    scrollTop.value = e.target.scrollTop
    isBottom.value =
        e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight
}
</script>



<style lang="less" scoped>

// 工作经历
.work-exp {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem 3rem;
    height: 100%;
    overflow: hidden;
    border: 1px solid var(--border);
    position: relative;

    .exp-title {
        display: flex;
        gap: 12px;
        margin-bottom: 32px;

        .title {
            font-size: 20px;
            font-weight: 600;
            line-height: 20px;
        }

        .zhaungshi {
            width: 4px;
            height: 20px;
            background: #3278FF;
            border-radius: 32px;
        }
    }

    .container {
        height: 460+72px;
        overflow: auto;

        .item {
            display: flex;
            

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
                margin-left: 10px;
                padding-bottom: 3rem;

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
        }

        .item:last-child>.circle {
            &:after {
                display: none;
            }
        }
    }

    .top-shadow,
    .bottom-shadow {
        position: absolute;
        left: 0;
        right: 0;
        height: 10px;
    }
    
    .top-shadow {
        top: 84px;
        background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.06) 100%);
    }
    
    .bottom-shadow {
        bottom: 0;
        background: linear-gradient(360deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0) 100%);
    }
}



/* 隐藏默认滚动条 */
::-webkit-scrollbar {
    display: none;
}


</style>