<template>
    <div class="projectExp">
        <!-- 标题 -->
        <div class="exp-title">
            <div class="zhaungshi"></div>
            <div class="title">项目经历</div>
        </div>
        <!-- 内容卡片 -->
        <div v-for="(item, index) in projectExp">
            <!-- 单个项目信息 -->
            <div class="company">
                <div class="company-and-time">
                    <div class="company-name">{{ item.name }}</div>
                    <div class="company-time">{{ item.time }}</div>
                </div>
                <div class="fuzeneirong">负责内容</div>
                <div class="company-duty">
                    <div v-for="i in item.content">{{ i }}</div>
                </div>
                <hr color='#EAEAEA' v-if="xiantiao_project(index)">
            </div>
        </div>
    </div>
</template>




<script setup>
// 引入json文件
import projectExp from '../../assets/data/projectExp.json'

// 最后一条线条隐藏
function xiantiao_project(index) {
    if (index < projectExp.length - 1) {
        return true
    }
    else {
        return false
    }
}

</script>






<style lang="less" scoped>
.projectExp {
    background-color: white;
    border-radius: 12px;
    padding: 30px;

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


}
</style>