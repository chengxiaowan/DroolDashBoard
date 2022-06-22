import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        name:"首页",
        path:"/",
        component: ()=>import('../page/index.vue')
    },
    {
        name: "关于",
        path: "/about",
        component: () => import('../page/about.vue')
    }
]

//导出路由对象
export default createRouter({
    history:createWebHashHistory(),
    routes
})
