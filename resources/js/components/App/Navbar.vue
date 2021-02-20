<template>
    <div class="w-full text-gray-700 bg-white border-b-2 border-gray-300 border-opacity-50">
        <div class="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row">
            <div class="flex flex-row items-center justify-between px-2 py-4">
                <logo/>
                <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                        <path v-if="!open" fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                        <path v-if="open" fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <nav
                :class="open ? '' : 'hidden md:flex items-center'"
                class="flex flex-col flex-grow pb-4 md:pb-0 md:justify-end md:flex-row">
                <a class="px-4 py-2 text-sm font-semibold bg-transparent md:rounded-lg md:ml-4 hover:text-white hover:bg-purple-600"
                    href="#">GCSE</a>
                <a class="px-4 py-2 text-sm font-semibold bg-transparent md:rounded-lg md:ml-4 hover:text-white hover:bg-purple-600"
                    href="#">IGCSE</a>
                <a class="px-4 py-2 text-sm font-semibold bg-transparent md:rounded-lg md:ml-4 hover:text-white hover:bg-purple-600"
                    href="#">AS</a>
                <a class="px-4 py-2 text-sm font-semibold bg-transparent md:rounded-lg md:ml-4 hover:text-white hover:bg-purple-600"
                    href="#">A Level</a>
                <div v-if="auth" class="relative">
                    <div @click="open2 = !open2" class="flex flex-col items-center">
                        <img class="inline object-cover w-8 h-8 rounded-full hidden md:block"
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                            alt="image" />
                        <span class="text-xs">{{ user.name }}</span>
                    </div>
                    <div v-if="open2" class="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right">
                        <div class="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a class="flex row items-start rounded-lg bg-transparent p-2 hover:text-white focus:text-gray-900 hover:bg-purple-600 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#">
                                    <div class="rounded-lg">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                            class="md:h-6 md:w-6 h-4 w-4">
                                            <path
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">O Level</p>
                                        <!-- <p class="text-sm">Easy customization</p> -->
                                    </div>
                                </a>

                                <a class="flex row items-start rounded-lg bg-transparent p-2 hover:text-white focus:text-gray-900 hover:bg-purple-600 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#">
                                    <div class="rounded-lg">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                            class="md:h-6 md:w-6 h-4 w-4">
                                            <path
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">Pre Level</p>
                                        <!-- <p class="text-sm">Check your latest comments</p> -->
                                    </div>
                                </a>

                                <a class="flex row items-start rounded-lg bg-transparent p-2 hover:text-white focus:text-gray-900 hover:bg-purple-600 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#">
                                    <div class="rounded-lg">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                            class="md:h-6 md:w-6 h-4 w-4">
                                            <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                            <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">IB</p>
                                        <!-- <p class="text-sm">Take a look at your statistics</p> -->
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Login/ Logout  -->
                <div v-if="!auth" class="flex flex-col md:flex-row">
                    <router-link class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent text-purple-600 md:mt-0 md:ml-4 hover:text-gray-900"
                        to="/login">Login</router-link>
                    <router-link class="px-4 py-2 mt-2 text-sm font-semibold bg-purple-600 text-white md:mt-0 md:ml-4 hover:text-purple-600 hover:bg-transparent hover:bg-transparent md:rounded border hover:border-purple-600"
                        to="/signup">Join Now</router-link>
                </div>
                <div v-else class="flex flex-col md:flex-row">
                    <div @click="logout" class="px-4 py-2 mt-2 text-sm font-semibold bg-purple-600 text-white md:mt-0 md:ml-4 hover:text-purple-600 hover:bg-transparent hover:bg-transparent md:rounded border hover:border-purple-600 cursor-pointer">Log Out</div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import Logo from "../App/Logo"
export default {
    components:{Logo},
    data(){
        return{
            open: false,
            open2: false,
            auth: localStorage.getItem('auth'),
            user : JSON.parse(localStorage.getItem('user'))
        }
    },
    methods:{
        logout(){
            localStorage.setItem('auth','')
            location.href = '/logout'
        }
    }
}
</script>

<style>

</style>