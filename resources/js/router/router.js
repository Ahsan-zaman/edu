import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/app',
            name: 'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/signup',
            name: 'Register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/exams/:exam/subjects/:subject/quizes/:id',
            name: 'Quiz',
            component: () => import('../views/Quiz.vue')
        }
    ]
})
export default router;