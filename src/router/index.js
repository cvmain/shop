import {createRouter,createWebHashHistory } from "vue-router"
const Index = () => import('~/pages/index.vue')
const Login = () => import('~/pages/login.vue')
const NotFound = () => import('~/pages/404.vue')
const routes = [
    {
        path:"/",
        component:Index,
        meta:{
            title:"后台首页"
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            title:"登录"
        }
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound,
        meta:{
            title:"没有找到页面"
        } 
    },
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router