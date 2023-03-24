import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { path: "/", redirect: "/home", },
  { 
    path: '/home', 
    name: 'home',
    component: () => import('../views/home/index.vue') 
  },
  { 
    path: '/about', 
    name: 'about',
    component: () => import('../views/about/index.vue') 
  },
  {
    path: '/content/:id',
    name: 'content',
    component: () => import('../views/content/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

// 切换页面，自动回顶部
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router