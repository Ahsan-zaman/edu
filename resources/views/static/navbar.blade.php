<!-- component -->
<div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
    <div x-data="{ open: false }"
        class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div class="flex flex-row items-center justify-between p-4">
            @include('static.app-logo', array('fill' => 'none'))
            <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                    <path x-show="!open" fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                    <path x-show="open" fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
        <nav :class="{'flex': open, 'hidden': !open}"
            class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row md:items-center">
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent md:mt-0 md:ml-4 hover:text-white focus:text-gray-900 hover:bg-purple-600 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#">GCSE</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent md:mt-0 md:ml-4 hover:text-white focus:text-gray-900 hover:bg-purple-600 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#">IGCSE</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent md:mt-0 md:ml-4 hover:text-white focus:text-gray-900 hover:bg-purple-600 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#">AS</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent md:mt-0 md:ml-4 hover:text-white focus:text-gray-900 hover:bg-purple-600 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#">A Level</a>
            <div @click.away="open = false" class="relative" x-data="{ open: false }">
                <button @click="open = !open"
                    class="flex flex-row text-purple-600 bg-transparent items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 border border-purple-600 focus:outline-white">
                    <span>More</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}"
                        class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div x-show="open" x-transition:enter="transition ease-out duration-100"
                    x-transition:enter-start="transform opacity-0 scale-95"
                    x-transition:enter-end="transform opacity-100 scale-100"
                    x-transition:leave="transition ease-in duration-75"
                    x-transition:leave-start="transform opacity-100 scale-100"
                    x-transition:leave-end="transform opacity-0 scale-95"
                    class="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right">
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

            <div class="flex flex-col md:flex-row pl-4 justify-center items-center">
                @guest
                <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent text-purple-600 md:mt-0 md:ml-4 hover:text-gray-900"
                    href="{{ url('/login') }}">Login</a>
                <a class="px-4 py-2 mt-2 text-sm font-semibold bg-purple-600 text-white md:mt-0 md:ml-4 hover:text-purple-600 hover:bg-transparent hover:bg-transparent rounded border hover:border-purple-600"
                    href="{{ url('/signup') }}">Join Now</a>
                @endguest
                @auth
                <div class="flex flex-col items-center">
                    <img class="inline object-cover w-8 h-8 rounded-full hidden md:block"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        alt="image" />
                    <span class="text-xs">{{ Auth::user()->name }}</span>
                </div>
                <a class="px-4 py-2 mt-2 text-sm font-semibold bg-purple-600 text-white md:mt-0 md:ml-4 hover:text-purple-600 hover:bg-transparent hover:bg-transparent rounded border hover:border-purple-600"
                    href="{{ url('/logout') }}">Log Out</a>
                @endauth
            </div>
        </nav>
    </div>
</div>