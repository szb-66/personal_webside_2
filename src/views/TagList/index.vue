<template>
    <div class="main">
        <el-row :gutter="16">
            <!-- 左边 -->
            <el-col :span="19">
                <div class="articleList">
                    <!-- 标签区域 -->
                    <div class="tags">
                        <div class="tag" v-for="(tag, index) in tags" id="index" @click="go(tag.tag)" :id="index" :class="{hover: tag.tag === route.params.tag}">
                            {{ tag.tag }}
                        </div>
                    </div>
                    <div class="newTitle">{{ route.params.tag }}</div>
                    <!-- 文章列表 -->
                    <div>
                        <Article v-for="(item, index) in showTableData" :key="index" :article="item">
                        </Article>
                    </div>
                    <!-- 分页器 -->
                    <el-pagination background layout="total, sizes, prev, pager, next, jumper"
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex"
                        :page-size="pageSize" :page-sizes="[2, 4, 6, 10]" :total="total">
                    </el-pagination>
                </div>
            </el-col>
            <!-- 右边 -->
            <el-col :span="5" class="right">
                <div class="right">
                    <About></About>
                    <RecentArticle></RecentArticle>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import About from '../../components/about.vue'
import RecentArticle from '../../components/RecentArticle.vue'
import { useRouter, useRoute } from 'vue-router'
import Article from '../../components/Article.vue'

document.title = `文章标签-施志标`

// 接受路由传过来的tag
const route = useRoute()
const router = useRouter()
const tag = ref(route.params.tag)
const tags = ref([]); // 标签信息

const pageIndex = ref(1); // 第几页
const pageSize = ref(8); // 每页几条数据
const total = ref(0); // 总条目数
const allTableData = ref([]); // 所有的数据
const showTableData = ref([]); // 当前展示的数据


watch(() => route.params.tag, async (newTag, oldTag) => {
    if (newTag !== oldTag) {
        try {
            const response = await axios.get('https://szb.design:3000/api/articles/tag', {
                params: { tag: newTag }
            });
            allTableData.value = response.data;
            getShowTableData()
            console.log(route.params.tag);
        } catch (error) {
            console.error('获取对应tag文章失败：', error);
        }
    }
}, {
    immediate: true,
    deep: true
});

// 异步数据请求
onMounted(async () => {
    // 获取tags信息
    await axios.get(`https://szb.design:3000/api/tags`)
        .then(res => {
            // 属性：tag、count
            tags.value = res.data;
        })
        .catch(err => {
            console.log(err);
        })

    setTimeout(() => {
        // 3. 获取总条目数
        total.value = allTableData.value.length;
        // 4. 根据当前是第几页、每页展示几条，去截取需要展示的数据
        getShowTableData();
    }, 1000);
});

function getShowTableData() {
    // 5. 获取截取开始索引
    const begin = (pageIndex.value - 1) * pageSize.value;
    // 6. 获取截取结束索引
    const end = pageIndex.value * pageSize.value;
    // 7. 通过索引去截取，从而展示
    showTableData.value = allTableData.value.slice(begin, end);
}
// 8. 页数改变，重新截取
function handleCurrentChange(val) {
    pageIndex.value = val;
    getShowTableData();
}

// 9. 条目数改变，也重新截取
function handleSizeChange(val) {
    pageIndex.value = 1;
    pageSize.value = val;
    getShowTableData();
}

function go(tag) {
    router.push({
        name: 'TagList',
        params: {
            tag: tag
        }
    })
}
</script>

<style lang="less" scoped>
.main {
    max-width: 1440px;
    padding: 0 1.5rem;
    margin: 90px auto 1rem auto;


    .articleList {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--white);
        border: 1px solid var(--border);
        padding: 1rem;
        border-radius: 1rem;
        margin-bottom: 2rem;

        .tags {
            border-radius: 1rem;
            border: 1px solid var(--border);
            padding: 1rem;
            background-color: var(--white);

            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;

            .tag {
                // font-size: small;
                border: 1px solid var(--border);
                border-radius: 0.5rem;
                padding: 0.6rem;

                &:hover {
                    background-color: var(--blue);
                    color: var(--white);
                    // 手指
                    cursor: pointer;
                }
            }
            // 选中标签
            .hover{
                background-color: var(--blue);
                    color: var(--white);
            }

        }

        .newTitle {
            margin: 1rem;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }

    .right {
        // padding: 0!;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

}
</style>