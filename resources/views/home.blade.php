<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <!-- <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"> -->

    <!-- Styles -->
    <style>
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
        html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%
        }

        body {
            margin: 0
        }

        a {
            background-color: transparent
        }

        [hidden] {
            display: none
        }

        html {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
            line-height: 1.5
        }

        *,
        :after,
        :before {
            box-sizing: border-box;
            border: 0 solid #e2e8f0
        }

        a {
            color: inherit;
            text-decoration: inherit
        }

        svg,
        video {
            display: block;
            /* vertical-align: middle */
        }

        video {
            max-width: 100%;
            height: auto
        }

        .bg-white {
            --bg-opacity: 1;
            background-color: #fff;
            background-color: rgba(255, 255, 255, var(--bg-opacity))
        }

        .bg-gray-100 {
            --bg-opacity: 1;
            background-color: #f7fafc;
            background-color: rgba(247, 250, 252, var(--bg-opacity))
        }

        .border-gray-200 {
            --border-opacity: 1;
            border-color: #edf2f7;
            border-color: rgba(237, 242, 247, var(--border-opacity))
        }

        .border-t {
            border-top-width: 1px
        }

        .flex {
            display: flex
        }

        .grid {
            display: grid
        }

        .hidden {
            display: none
        }

        .items-center {
            align-items: center
        }

        .justify-center {
            justify-content: center
        }

        .font-semibold {
            font-weight: 600
        }

        .h-5 {
            height: 1.25rem
        }

        .h-8 {
            height: 2rem
        }

        .h-16 {
            height: 4rem
        }

        .text-sm {
            font-size: .875rem
        }

        .text-lg {
            font-size: 1.125rem
        }

        .leading-7 {
            line-height: 1.75rem
        }

        .mx-auto {
            margin-left: auto;
            margin-right: auto
        }

        .ml-1 {
            margin-left: .25rem
        }

        .mt-2 {
            margin-top: .5rem
        }

        .mr-2 {
            margin-right: .5rem
        }

        .ml-2 {
            margin-left: .5rem
        }

        .mt-4 {
            margin-top: 1rem
        }

        .ml-4 {
            margin-left: 1rem
        }

        .mt-8 {
            margin-top: 2rem
        }

        .ml-12 {
            margin-left: 3rem
        }

        .-mt-px {
            margin-top: -1px
        }

        .max-w-6xl {
            max-width: 72rem
        }

        .min-h-screen {
            min-height: 100vh
        }

        .overflow-hidden {
            overflow: hidden
        }

        .p-6 {
            padding: 1.5rem
        }

        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem
        }

        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem
        }

        .pt-8 {
            padding-top: 2rem
        }

        .fixed {
            position: fixed
        }

        .relative {
            position: relative
        }

        .top-0 {
            top: 0
        }

        .right-0 {
            right: 0
        }

        .shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)
        }

        .text-center {
            text-align: center
        }

        .text-gray-200 {
            --text-opacity: 1;
            color: #edf2f7;
            color: rgba(237, 242, 247, var(--text-opacity))
        }

        .text-gray-300 {
            --text-opacity: 1;
            color: #e2e8f0;
            color: rgba(226, 232, 240, var(--text-opacity))
        }

        .text-gray-400 {
            --text-opacity: 1;
            color: #cbd5e0;
            color: rgba(203, 213, 224, var(--text-opacity))
        }

        .text-gray-500 {
            --text-opacity: 1;
            color: #a0aec0;
            color: rgba(160, 174, 192, var(--text-opacity))
        }

        .text-gray-600 {
            --text-opacity: 1;
            color: #718096;
            color: rgba(113, 128, 150, var(--text-opacity))
        }

        .text-gray-700 {
            --text-opacity: 1;
            color: #4a5568;
            color: rgba(74, 85, 104, var(--text-opacity))
        }

        .text-gray-900 {
            --text-opacity: 1;
            color: #1a202c;
            color: rgba(26, 32, 44, var(--text-opacity))
        }

        .underline {
            text-decoration: underline
        }

        .antialiased {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        .w-5 {
            width: 1.25rem
        }

        .w-8 {
            width: 2rem
        }

        .w-auto {
            width: auto
        }

        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr))
        }

        @media (min-width:640px) {
            .sm\:rounded-lg {
                border-radius: .5rem
            }

            .sm\:block {
                display: block
            }

            .sm\:items-center {
                align-items: center
            }

            .sm\:justify-start {
                justify-content: flex-start
            }

            .sm\:justify-between {
                justify-content: space-between
            }

            .sm\:h-20 {
                height: 5rem
            }

            .sm\:ml-0 {
                margin-left: 0
            }

            .sm\:px-6 {
                padding-left: 1.5rem;
                padding-right: 1.5rem
            }

            .sm\:pt-0 {
                padding-top: 0
            }

            .sm\:text-left {
                text-align: left
            }

            .sm\:text-right {
                text-align: right
            }
        }

        @media (min-width:768px) {
            .md\:border-t-0 {
                border-top-width: 0
            }

            .md\:border-l {
                border-left-width: 1px
            }

            .md\:grid-cols-2 {
                grid-template-columns: repeat(2, minmax(0, 1fr))
            }
        }

        @media (min-width:1024px) {
            .lg\:px-8 {
                padding-left: 2rem;
                padding-right: 2rem
            }
        }

        @media (prefers-color-scheme:dark) {
            .dark\:bg-gray-800 {
                --bg-opacity: 1;
                background-color: #2d3748;
                background-color: rgba(45, 55, 72, var(--bg-opacity))
            }

            .dark\:bg-gray-900 {
                --bg-opacity: 1;
                background-color: #1a202c;
                background-color: rgba(26, 32, 44, var(--bg-opacity))
            }

            .dark\:border-gray-700 {
                --border-opacity: 1;
                border-color: #4a5568;
                border-color: rgba(74, 85, 104, var(--border-opacity))
            }

            .dark\:text-white {
                --text-opacity: 1;
                color: #fff;
                color: rgba(255, 255, 255, var(--text-opacity))
            }

            .dark\:text-gray-400 {
                --text-opacity: 1;
                color: #cbd5e0;
                color: rgba(203, 213, 224, var(--text-opacity))
            }
        }
    </style>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

    <!-- <style>
        body {
            font-family: 'Nunito';
        }
    </style> -->
</head>

<body class="antialiased">
    <div class="min-h-screen">
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
                    class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
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
                            <svg fill="currentColor" viewBox="0 0 20 20"
                                :class="{'rotate-180': open, 'rotate-0': !open}"
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

                    <div class="flex flex-col md:flex-row">
                        <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent text-purple-600 md:mt-0 md:ml-4 hover:text-gray-900"
                            href="{{ url('/login') }}">Login</a>
                        <a class="px-4 py-2 mt-2 text-sm font-semibold bg-purple-600 text-white md:mt-0 md:ml-4 hover:text-purple-600 hover:bg-transparent hover:bg-transparent rounded border hover:border-purple-600"
                            href="{{ url('/register') }}">Join Now</a>
                    </div>
                </nav>
            </div>
        </div>
        <div class="mt-8 max-w-screen-xl mx-auto md:flex">
            <div class="flex-none md:flex-1 flex flex-col justify-center p-8 lg:px-16">
                <h1 class="font-bold text-5xl md:text-6xl leading-none">
                    Resources that <span class="text-purple-600">improve your grades by 2x</span>
                </h1>
                <p class="text-xl pt-8">
                    Over 10,000 exam questions organised by topic with model answers & revision notes.
                </p>
                <div class="md:flex justify-between mt-8">
                    <button
                        class="uppercase text-purple-600 bg-transparent rounded-full w-full md:w-3/12 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                        GCSE
                    </button>
                    <button
                        class="uppercase text-purple-600 bg-transparent rounded-full w-full md:w-3/12 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                        IGCSE
                    </button>
                    <button
                        class="uppercase text-purple-600 bg-transparent rounded-full w-full md:w-3/12 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                        A Level
                    </button>
                </div>
            </div>
            <div class="flex-none md:flex-1 flex items-center">
                <img class="mx-auto" width="450"
                    src="https://res.cloudinary.com/ahsan-zaman/image/upload/v1612257022/screely-1594200739107-800x754_bjlkry.png">
            </div>
        </div>
        <div class="p-8 bg-gray-100 flex flex-col items-center">
            <div class="text-2xl mt-4 text-center">
                Trusted by students at top schools
            </div>
            <div class="md:flex justify-between w-full max-w-screen-xl my-4">
                <div class="w-full text-center flex flex-col justify-between align-center">
                    <img style="max-width: 150px;" class="block h-50 mx-auto my-4"
                        src="https://res.cloudinary.com/ahsan-zaman/image/upload/v1612257076/Eton-College_qlefd2.png"
                        alt="Eton College" title="Eton College">
                    <div class="text-gray-800 text-lg">Eton College</div>
                </div>
                <div class="w-full text-center flex flex-col justify-between align-center">
                    <img style="max-width: 150px;" class="block h-50 mx-auto my-4"
                        src="https://res.cloudinary.com/ahsan-zaman/image/upload/v1612257088/harrow-school-1_s5hvg9.png"
                        alt="HArrow School" title="HArrow School">
                    <div class="text-gray-800 text-lg">Harrow School</div>
                </div>
                <div class="w-full text-center flex flex-col justify-between align-center">
                    <img style="max-width: 150px;" class="block h-50 mx-auto my-4"
                        src="https://res.cloudinary.com/ahsan-zaman/image/upload/v1612257130/Winchester-College_kdtcd9.png"
                        alt="Winchester College" title="Winchester College">
                    <div class="text-gray-800 text-lg">Winchester College</div>
                </div>
                <div class="w-full text-center flex flex-col justify-between align-center">
                    <img style="max-width: 150px;" class="block h-50 mx-auto my-4"
                        src="https://res.cloudinary.com/ahsan-zaman/image/upload/v1612257143/St-Pauls-School_sxhzd8.png"
                        alt="St Paul's School" title="St Paul's School">
                    <div class="text-gray-800 text-lg">St Paul's College</div>
                </div>
            </div>
        </div>
        <div class="p-8 bg-blue-100 flex flex-col items-center">
            <div class="text-2xl mt-4 text-center">
                Get started with our new quizes
            </div>
            <div class="text-lg mt-4 text-center">
                Choose your quiz level
            </div>
            <div class="grid grid-cols-3 gap-6">
                <button
                    class="d-block uppercase text-purple-600 bg-transparent rounded-full w-full px-10 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                    O Level
                </button>
                <button
                    class="d-block uppercase text-purple-600 bg-transparent rounded-full w-full px-10 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                    A Level
                </button>
                <button
                    class="d-block uppercase text-purple-600 bg-transparent rounded-full w-full px-10 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                    GCSE
                </button>
                <button
                    class="d-block uppercase text-purple-600 bg-transparent rounded-full w-full px-10 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                    IGCSE
                </button>
                <button
                    class="d-block uppercase text-purple-600 bg-transparent rounded-full w-full px-10 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                    AS
                </button>
                <button
                    class="d-block uppercase text-purple-600 bg-transparent rounded-full w-full px-10 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                    PRE U
                </button>
                <button
                    class="d-block uppercase text-purple-600 bg-transparent rounded-full w-full px-10 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                    SAT
                </button>
                <button
                    class="d-block uppercase text-purple-600 bg-transparent rounded-full w-full px-10 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                    IELTS
                </button>
                <button
                    class="d-block uppercase text-purple-600 bg-transparent rounded-full w-full px-10 h-12 mt-2 text-lg font-semibold text-center border border-purple-600 hover:text-gray-100 hover:bg-purple-600">
                    TOEFL
                </button>
            </div>
        </div>


        <!-- component -->
        <section>
            <div class="container max-w-full mx-auto py-24 px-6">
                <h1 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
                    Plans & Pricing
                </h1>
                <!-- <p class="text-center text-lg text-gray-700 mt-2 px-6">
                    Get full access to all resources from £5 / month
                </p> -->
                <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

                <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
                    <div class="relative block flex flex-col md:flex-row items-center">
                        <div
                            class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                            <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                                <div
                                    class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                                    <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                                        Basic
                                    </h1>
                                    <h2 class="text-sm text-gray-500 text-center pb-6">FREE</h2>

                                    No sign up required.
                                </div>

                                <div class="flex flex-wrap mt-3 px-6">
                                    <ul>
                                        <li class="flex items-center">
                                            <div class=" rounded-full p-2 fill-current text-green-700">
                                                <svg class="w-6 h-6 align-middle" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <span class="text-gray-700 text-lg ml-3">Past Papers</span>
                                        </li>
                                        <li class="flex items-center">
                                            <div class=" rounded-full p-2 fill-current text-green-700">
                                                <svg class="w-6 h-6 align-middle" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <span class="text-gray-700 text-lg ml-3">Revision Notes</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="block flex items-center p-8  uppercase">
                                    <button
                                        class="mt-3 text-lg font-semibold bg-purple-600 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                            <div
                                class="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
                                Most Popular
                            </div>
                            <div
                                class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                                <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                                    Plus
                                </h1>
                                <h2 class="text-sm text-gray-500 text-center pb-6"><span class="text-3xl">€5</span> /mo
                                </h2>
                                Per month, billed annually.
                            </div>
                            <div class="flex pl-12 justify-start sm:justify-start mt-3">
                                <ul>
                                    <li class="flex items-center">
                                        <div class="rounded-full px-2 stroke-current text-green-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27"
                                                viewBox="0 0 512 512">
                                                <path
                                                    d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
                                                    style="fill:none;stroke-miterlimit:10" stroke-width="38" />
                                                <line x1="256" y1="176" x2="256" y2="336"
                                                    style="fill:none;stroke-linecap:round;stroke-linejoin:round"
                                                    stroke-width="38" />
                                                <line x1="336" y1="256" x2="176" y2="256"
                                                    style="fill:none;stroke-linecap:round;stroke-linejoin:round"
                                                    stroke-width="38" />
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Basic</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Topic Questions</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Model Answers</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-green-700">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3">Videos</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="block flex items-center p-8  uppercase">
                                <button
                                    class="mt-3 text-lg font-semibold bg-purple-600 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700">
                                    Select
                                </button>
                            </div>
                        </div>
                        <div
                            class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                            <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                                <div
                                    class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                                    <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                                        Premium
                                    </h1>
                                    <h2 class="text-sm text-gray-500 text-center pb-6">€15 /mo</h2>
                                    Per month, billed annually.
                                </div>
                                <div class="flex flex-wrap mt-3 px-6">
                                    <ul>
                                        <li class="flex items-center">
                                            <div class="rounded-full px-2 stroke-current text-green-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                                    viewBox="0 0 512 512">
                                                    <path
                                                        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
                                                        style="fill:none;stroke-miterlimit:10" stroke-width="38" />
                                                    <line x1="256" y1="176" x2="256" y2="336"
                                                        style="fill:none;stroke-linecap:round;stroke-linejoin:round"
                                                        stroke-width="38" />
                                                    <line x1="336" y1="256" x2="176" y2="256"
                                                        style="fill:none;stroke-linecap:round;stroke-linejoin:round"
                                                        stroke-width="38" />
                                                </svg>
                                            </div>
                                            <span class="text-gray-700 text-lg ml-3">Plus</span>
                                        </li>
                                        <li class="flex items-center">
                                            <div class=" rounded-full p-2 fill-current text-green-700">
                                                <svg class="w-6 h-6 align-middle" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <span class="text-gray-700 text-lg ml-3">Videos</span>
                                        </li>
                                        <li class="flex items-center">
                                            <div class=" rounded-full p-2 fill-current text-green-700">
                                                <svg class="w-6 h-6 align-middle" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <span class="text-gray-700 text-lg ml-3">Expert Coaching</span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="block flex items-center p-8  uppercase">
                                    <button
                                        class="mt-3 text-lg font-semibold bg-purple-600 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-gray-900 py-8">
            <div class="max-w-screen-xl md:flex mx-auto divide-y divide-gray-500 md:divide-none">
                <div class="flex text-center md:mr-auto mb-4 md:mb-0">
                    @include('static.app-logo', array('fill' => 'dark'))
                </div>
                <div class="mx-4 flex flex-col text-gray-200 py-4 md:py-0">
                    <div class="text-lg text-white">Resources</div>
                    <a class="text-sm leading-loose hover:text-white" href="#">Home</a>
                    <a class="text-sm leading-loose hover:text-white" href="#">Members</a>
                    <a class="text-sm leading-loose hover:text-white" href="#">Join</a>
                    <a class="text-sm leading-loose hover:text-white" href="#">Sitemaps</a>
                    <a class="text-sm leading-loose hover:text-white" href="#">Blog</a>
                </div>
                <div class="mx-4 flex flex-col text-gray-200 py-4 md:py-0">
                    <div class="text-lg text-white">Support</div>
                    <a class="text-sm leading-loose hover:text-white" href="#">FAQs</a>
                    <a class="text-sm leading-loose hover:text-white" href="#">Contact Us</a>
                </div>
                <div class="mx-4 flex flex-col text-gray-200 py-4 md:py-0">
                    <div class="text-lg text-white">Company</div>
                    <a class="text-sm leading-loose hover:text-white" href="#">About us</a>
                    <a class="text-sm leading-loose hover:text-white" href="#">Terms</a>
                    <a class="text-sm leading-loose hover:text-white" href="#">Privacy Policy</a>
                    <a class="text-sm leading-loose hover:text-white" href="#">Jobs</a>
                    <a class="text-sm leading-loose hover:text-white" href="#">Blog</a>
                </div>
            </div>
        </footer>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></script>
</body>

</html>