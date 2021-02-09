require('./bootstrap');

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import mitt from 'mitt'
import axios from 'axios';

var bus = mitt()
const app = createApp(App)
app.config.globalProperties.bus = bus
app.use(router)
app.mount("#app")