import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

const routes=[
    {
        path : '/dashboard',
        name : 'dashboard',
        component: Dashboard
    },
    {
        path : '/login',
        name : 'login',
        component: Login
    },
    // {
    //     path : '/signup',
    //     name : 'signup',
    //     component: Signup
    // }

];

const router =createRouter({
    history: createWebHistory(),
    routes
})

export default router