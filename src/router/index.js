import Vue from  'vue'
import App from '../App'
import  VueRouter from  'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'',
        component: () => import('@/pages/index')
    },
    {
        path:'/index',
        name:'index',
        component: () => import('../pages/index.vue')
    },
    {
        path:'/category/:keyword',
        name:'category',
        component: () => import('../pages/category'),
        props:true

    },
    {
        path:'/category',
        name:'category',
        component: () => import('../pages/category'),
        props:true

    },
    {
        path:'/shopcar',
        name:'shopcar',
        component: () => import('../pages/shopcar'),
    }

]

const router = new VueRouter({
    mode:'history',
    routes:routes,
    components:{App},
    template:'<App/>'
})

export default router

