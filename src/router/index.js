import { createRouter,createWebHistory } from 'vue-router'
const routes = [
    {
     name:'登录首页',
     path: '/Login',
     component: () => import("../views/Login/LoginPage.vue") 
    },
    {
        name:'用户改密码页',
        path: '/UpdatePassword',
        component: () => import("../views/User/UserPassword.vue") 
       },
];

const router = createRouter({
    routes,
    history:createWebHistory(),
})

export default router
