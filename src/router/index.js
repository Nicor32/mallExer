import Vue from 'vue'
import VueRouter from 'vue-router'



const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopping = () => import('../views/shopping/Shopping.vue')
const Profile = () => import('../views/profile/Profile.vue')

// 1.安装插件
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/shopping',
        component:Shopping
    },
    {
        path:'/profile',
        component:Profile
    },

]

const router = new VueRouter({
    routes,
    mode:"history"
})

export default router