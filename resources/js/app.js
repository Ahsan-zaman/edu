import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import mitt from "mitt";
import axios from "axios";

// let a = axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let axiosIns = axios.create({
    // You can add your headers here
    // ================================
    baseURL: "/api/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
axiosIns.defaults.withCredentials = true;
// Request Interceptor
axiosIns.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `${localStorage.getItem(
            "token"
        )} bearer`;
        return config;
    },
    (error) => Promise.reject(error)
);

// Add request/response interceptor
axiosIns.interceptors.response.use(
    (response) => response,
    (error) => {
        // const { config, response: { status } } = error
        const { config, response } = error;
        const originalRequest = config;

        // if (status === 401) {
        if (response && response.status === 401) {
            // console.log(response)
            localStorage.setItem("auth", false);

            // Remove userData from localStorage
            // localStorage.removeItem("userData");

            window.location.replace('/login');
        }
        return Promise.reject(error);
    }
);

var bus = mitt();
const app = createApp(App);
app.config.globalProperties.bus = bus;
app.config.globalProperties.$http = axiosIns;
app.use(router);
app.mount("#app");
