require('./bootstrap');

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/app',
            name: 'Home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/signup',
            name: 'Register',
            component: () => import('./views/Register.vue')
        }
    ]
})
const app = createApp(App)
app.use(router)

app.directive('click-outside', {
    bind () {
        this.event = event => this.vm.$emit(this.expression, event)
        this.el.addEventListener('click', this.stopProp)
        document.body.addEventListener('click', this.event)
    },   
    unbind() {
      this.el.removeEventListener('click', this.stopProp)
      document.body.removeEventListener('click', this.event)
    },
  
    stopProp(event) { event.stopPropagation() }
  })
app.mount("#app")