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
    },
    {
        path:'/goods/:id',
        name:'Goods',
        component: () => import('../views/goods/index'),
        props:true,
        children:[{
            path:'detail',
            name:'detail',
            component: () => import('../views/goods/detail'),
            props:true
        },{
            path:'spec',
            name:'spec',
            component: () => import('../views/goods/spec'),
            props:true
        },{
            path:'service',
            name:'service',
            component: () => import('../views/goods/service'),

        },{
            path:'comments',
            name:'comments',
            component: () => import('../views/goods/comments'),

        },

        ]

    }

]

const router = new VueRouter({
    mode:'history',
    routes:routes,
    components:{App},
    template:'<App/>'
})

export default router

