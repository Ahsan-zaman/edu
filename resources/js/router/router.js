import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/app",
            name: "Home",
            component: () => import("../views/Home.vue"),
        },
        {
            path: "/teacher",
            name: "Teacher",
            component: () => import("../views/teacher/Teacher.vue"),
        },
        {
            path: "/teacher/quiz/create",
            name: "CreateQuiz",
            component: () => import("../views/teacher/CreatQuiz.vue"),
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("../views/Login.vue"),
        },
        {
            path: "/signup",
            name: "Register",
            component: () => import("../views/Register.vue"),
        },
        {
            path: "/quiz/my",
            name: "MyQuiz",
            component: () => import("../views/MyQuiz.vue"),
        },
        {
            path: "/quiz/random",
            name: "Random",
            component: () => import("../views/MyQuiz.vue"),
        },
        {
            path: "/quiz/:id",
            name: "TakeQuiz",
            component: () => import("../views/Quiz.vue"),
        },
        {
            path: "/exams/:exam/subjects/:subject/quizes/:id",
            name: "Quiz",
            component: () => import("../views/Quiz.vue"),
        },
    ],
});
export default router;
